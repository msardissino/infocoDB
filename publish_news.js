const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://msvbmbcfuwajxqcuizjc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zdmJtYmNmdXdhanhxY3VpempjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0NjcxODUsImV4cCI6MjA5OTA0MzE4NX0.T-qJcNzW-7_Uz0FDU5RrAAi83ErZ3-bGjiloj1aURwo';

const email = process.argv[2];
const password = process.argv[3];

if (!email || !password) {
  console.log('\n❌ Error: Debes ingresar tu correo y contraseña del panel de administración.');
  console.log('Uso: node publish_news.js <email> <contraseña>\n');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const payload = {
  title: '4ta fecha del Torneo de Berisso: El Equipo Azul representó a Intres',
  slug: 'torneo-de-berisso-4ta-fecha-equipo-azul',
  category: 'FUERA DEL CENTRO',
  description: 'El equipo azul que representó a Intres sufrió una derrota de 6 a 4 frente a Gimnasia y Esgrima de La Plata, demostrando un excelente nivel competitivo.',
  date: '15 de Julio',
  time: '',
  location: 'Berisso',
  icon: 'users',
  image_url: '/images/noticias/torneoBonaerense2026/torneoBonaerense01.jpeg',
  content_markdown: `El pasado 15 de julio se llevó a cabo la 4ta fecha del Torneo de Berisso. El Equipo Azul, en representación de Intres, disputó un gran encuentro frente a Gimnasia y Esgrima de La Plata, con un resultado final de 6 a 4.

A pesar de la derrota, el desempeño de los jugadores demostró un gran avance técnico y táctico, además de una entrega ejemplar. Su director técnico (DT) expresó con orgullo:

> "Jugaron bárbaro y la pasamos re bien. Estuvimos todos de acuerdo que se está elevando el nivel competitivo de Intres y eso está buenísimo."

¡Felicitamos a todo el plantel por su esfuerzo, compañerismo y por dejar todo en la cancha representando los colores de Intres!

![Torneo Bonaerense](/images/noticias/torneoBonaerense2026/torneoBonaerense02.jpeg)
`
};

async function run() {
  console.log('🔄 Iniciando sesión en Supabase...');
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authError) {
    console.error('❌ Error de autenticación:', authError.message);
    process.exit(1);
  }

  console.log('✅ Sesión iniciada correctamente.');
  console.log('🔄 Publicando noticia...');

  const { data, error } = await supabase.from('noticias').insert([payload]);

  if (error) {
    console.error('❌ Error al insertar noticia:', error.message);
  } else {
    console.log('🎉 ¡Noticia publicada con éxito!');
  }
}

run();
