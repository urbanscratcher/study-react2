
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tyqldryievsmpragrwbf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cWxkcnlpZXZzbXByYWdyd2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODczNjUwMzksImV4cCI6MjAwMjk0MTAzOX0.GeBNfB194ooEc4Ib9YBsp4ms1bFHiqklgnxteVg7eno"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;