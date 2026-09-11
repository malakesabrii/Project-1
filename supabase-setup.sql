-- KidsMeals Contact Leads Table
-- Run this script in your Supabase SQL Editor

-- Create contact_leads table
CREATE TABLE IF NOT EXISTS contact_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  collaboration_types TEXT[] NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
  source TEXT DEFAULT 'landing_page'
);

-- Add helpful comment
COMMENT ON TABLE contact_leads IS 'Contact leads from the KidsMeals landing page';
COMMENT ON COLUMN contact_leads.collaboration_types IS 'Array of collaboration type values: business, investment, nutrition, production, delivery, marketing, other';
COMMENT ON COLUMN contact_leads.status IS 'Lead status: new (default), contacted, qualified, closed';

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_leads_created_at ON contact_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_leads_status ON contact_leads(status);
CREATE INDEX IF NOT EXISTS idx_contact_leads_phone ON contact_leads(phone);

-- Enable Row Level Security
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (for re-running this script)
DROP POLICY IF EXISTS "Allow public insert" ON contact_leads;
DROP POLICY IF EXISTS "Allow authenticated read" ON contact_leads;
DROP POLICY IF EXISTS "Allow authenticated update" ON contact_leads;

-- Policy 1: Allow public INSERT only (users can submit leads but cannot read others)
CREATE POLICY "Allow public insert" ON contact_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy 2: Only authenticated users can read (for future admin dashboard)
CREATE POLICY "Allow authenticated read" ON contact_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy 3: Only authenticated users can update
CREATE POLICY "Allow authenticated update" ON contact_leads
  FOR UPDATE
  TO authenticated
  USING (true);

-- Verification: Check that RLS is enabled
SELECT tablename, rowsecurity
FROM pg_tables
WHERE tablename = 'contact_leads';

-- Expected result: rowsecurity = true
