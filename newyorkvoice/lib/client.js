import { createClient } from "@supabase/supabase-js";

const URL = 'https://tloxngkqfuiayahmkfdf.supabase.co'

const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(URL, API_KEY);

