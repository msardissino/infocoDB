const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://msvbmbcfuwajxqcuizjc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zdmJtYmNmdXdhanhxY3VpempjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0NjcxODUsImV4cCI6MjA5OTA0MzE4NX0.T-qJcNzW-7_Uz0FDU5RrAAi83ErZ3-bGjiloj1aURwo';

const email = process.argv[2];
const password = process.argv[3];

if (!email || !password) {
  console.log('Uso: node create_bucket.js <email> <contraseña>');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
  if (authError) {
    console.error('Auth error:', authError.message);
    process.exit(1);
  }

  const { data, error } = await supabase.storage.createBucket('images', {
    public: true,
    fileSizeLimit: 5242880, // 5MB
    allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
  });

  if (error) {
    console.error('Error creating bucket:', error.message);
  } else {
    console.log('Bucket created successfully:', data);
  }
}

run();
