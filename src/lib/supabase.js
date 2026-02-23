import { createClient } from '@supabase/supabase-js';

// This pulls the keys you just saved in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// This creates the 'client' that we will use in our pages
export const supabase = createClient(supabaseUrl, supabaseAnonKey);