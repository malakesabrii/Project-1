import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactLead = {
  id?: string;
  created_at?: string;
  full_name: string;
  phone: string;
  email?: string;
  collaboration_types: string[];
  message?: string;
  status?: "new" | "contacted" | "qualified" | "closed";
  source?: string;
};
