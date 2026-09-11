# KidsMeals Landing Page

غذای سالم و گرم، برای رشد سالم‌تر کودکان و نوجوانان.

## 🌟 Overview

This is the official landing page for **KidsMeals** - a healthy meal business focused on children and teenagers. The website is built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

- **Mobile-first Persian (RTL) design**
- **Multi-step contact/partnership form** with Supabase integration
- **Responsive design** optimized for all screen sizes
- **Modern UI** with the KidsMeals brand identity
- **Performance optimized** with Next.js App Router
- **Type-safe** with TypeScript
- **Accessible** with semantic HTML and ARIA labels

## 📋 Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- A Vercel account (for deployment)
- Git configured

## 🛠️ Setup Instructions

### 1. Install Dependencies

Since PowerShell commands are restricted in your environment, please open a **separate terminal** (Command Prompt or PowerShell) and run:

\`\`\`bash
cd "D:\\Claude Project\\Project 1"
npm install
\`\`\`

### 2. Configure Supabase

#### Create the Database Table

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run this SQL script:

\`\`\`sql
-- Create contact_leads table
CREATE TABLE contact_leads (
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

-- Create index on created_at for faster queries
CREATE INDEX idx_contact_leads_created_at ON contact_leads(created_at DESC);

-- Create index on status
CREATE INDEX idx_contact_leads_status ON contact_leads(status);

-- Enable Row Level Security
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public INSERT only (users can submit but not read)
CREATE POLICY "Allow public insert" ON contact_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Only authenticated users can read (for admin dashboard in future)
CREATE POLICY "Allow authenticated read" ON contact_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update
CREATE POLICY "Allow authenticated update" ON contact_leads
  FOR UPDATE
  TO authenticated
  USING (true);
\`\`\`

#### Get Your Supabase Credentials

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL**
3. Copy your **anon/public** key

### 3. Environment Variables

1. Copy the example file:
   \`\`\`bash
   copy .env.example .env.local
   \`\`\`

2. Edit \`.env.local\` and add your Supabase credentials:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   \`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Test the Form

1. Navigate through the landing page
2. Click "با ما در ارتباط باشید" or "ارتباط با ما"
3. Fill out the 3-step form
4. Submit and verify in Supabase dashboard under **Table Editor** → **contact_leads**

## 📦 Git Setup

### Initialize Git Repository

\`\`\`bash
git init
git add .
git commit -m "feat: initial KidsMeals landing page with multi-step form and Supabase integration"
\`\`\`

### Connect to GitHub

If you already have a GitHub repository:

\`\`\`bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
\`\`\`

If you need to create a new repository:
1. Go to [github.com/new](https://github.com/new)
2. Create a new repository
3. Follow the instructions to push an existing repository

## 🚀 Deploy to Vercel

### Option 1: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Configure environment variables:
   - \`NEXT_PUBLIC_SUPABASE_URL\`
   - \`NEXT_PUBLIC_SUPABASE_ANON_KEY\`
5. Click **Deploy**

### Option 2: Via Vercel CLI

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

Follow the prompts and add environment variables when asked.

## 📁 Project Structure

\`\`\`
D:\\Claude Project\\Project 1\\
├── app/
│   ├── globals.css          # Global styles with RTL and fonts
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page (landing page)
├── components/
│   ├── Header.tsx            # Sticky header with navigation
│   ├── Hero.tsx              # Hero section
│   ├── Problem.tsx           # Parent pain points
│   ├── Solution.tsx          # KidsMeals solution
│   ├── Values.tsx            # Core values (4 cards)
│   ├── HowItWorks.tsx        # 3-step process
│   ├── AgeGroups.tsx         # Age group sections
│   ├── Trust.tsx             # Brand story
│   ├── PartnershipCTA.tsx    # Partnership call-to-action
│   ├── ContactForm.tsx       # 3-step contact form
│   ├── ContactSection.tsx    # Contact section wrapper
│   └── Footer.tsx            # Footer with links
├── lib/
│   └── supabase.ts           # Supabase client and types
├── public/
│   └── fonts/                # Place Dana and Vazirmatn fonts here
├── .env.example              # Environment variables template
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts        # Tailwind with KidsMeals colors
├── tsconfig.json
└── README.md
\`\`\`

## 🎨 Brand Colors

- **Sunny Orange**: \`#F2873B\`
- **Fresh Leaf Green**: \`#4CAF50\`
- **Deep Forest Green**: \`#2E7D32\` (Primary)
- **Lime / Leaf Green**: \`#8BC34A\`
- **Sunshine Yellow**: \`#FFCA28\`
- **Soft Grey**: \`#F5F5F5\`
- **Dark Slate Grey**: \`#37474F\`

## 🔤 Typography

- **Headings**: Dana (fallback to Vazirmatn)
- **Body**: Vazirmatn (fallback to Dana)

### Adding Fonts

To use the proper Persian fonts:

1. Download **Dana** and **Vazirmatn** font files (woff2 format)
2. Place them in \`public/fonts/\`
3. The font-face declarations are already in \`app/globals.css\`

Required files:
- \`Dana-Regular.woff2\`
- \`Dana-Medium.woff2\`
- \`Dana-Bold.woff2\`
- \`Dana-ExtraBold.woff2\`
- \`Vazirmatn-Regular.woff2\`
- \`Vazirmatn-Medium.woff2\`
- \`Vazirmatn-Bold.woff2\`

## ✅ Production Checklist

Before going live, verify:

- [ ] All environment variables set in Vercel
- [ ] Supabase RLS policies enabled and tested
- [ ] Contact form submits successfully
- [ ] Data appears in Supabase \`contact_leads\` table
- [ ] No secrets exposed in client-side code
- [ ] Mobile responsiveness tested (360px, 390px, 768px, 1024px)
- [ ] RTL layout working correctly
- [ ] All links functional
- [ ] No console errors
- [ ] Build succeeds (\`npm run build\`)
- [ ] Fonts loading correctly

## 🧪 Testing the Form End-to-End

1. Open production URL
2. Navigate to contact form
3. Complete Step 1: Enter name, phone, optional email
4. Complete Step 2: Select at least one collaboration type
5. Complete Step 3: Optionally add a message
6. Submit form
7. Verify success message appears
8. Check Supabase dashboard → contact_leads table
9. Verify record exists with correct data
10. Verify public users cannot read other leads (test RLS)

## 📝 Future Enhancements

This landing page is phase 1. Future additions may include:

- Menu/meal browsing
- Age-specific meal plans
- Order system
- Customer dashboard
- Admin panel for managing leads
- Email notifications
- Analytics integration

## 🐛 Troubleshooting

### Form submission fails
- Check Supabase credentials in \`.env.local\`
- Verify RLS policies are enabled
- Check browser console for errors

### Fonts not loading
- Ensure font files are in \`public/fonts/\`
- Check file names match those in \`globals.css\`
- Clear browser cache

### Build fails
- Run \`npm install\` again
- Check for TypeScript errors
- Verify all imports are correct

## 📞 Support

For questions or issues with this landing page, please contact the KidsMeals technical team.

---

**Built with ❤️ for KidsMeals**
\`\`\`
