import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types – expand as Phase 2 & 3 develop
export type Case = {
  id: string;
  client_id: string;
  title: string;
  status: 'open' | 'pending' | 'closed';
  created_at: string;
  updated_at: string;
};

export type Client = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  created_at: string;
};
