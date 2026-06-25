import { GroupDetail } from "@/types/group";

export const GROUPS_DATA: GroupDetail[] = [
  {
    slug: "campeones-del-flow",
    name: "Campeones del Flow",
    description: "Un grupo que elige encontrarse, reír, crear y disfrutar cada momento juntos.",
    memberCount: 10,
    establishedYear: 2026,
    heroCollage: [
      "/images/group/campeones_del_flow/todos.jpg",
      "/images/group/campeones_del_flow/todosDos.jpg"
    ],
    tutor: {
      name: "Agustín Pis Perez",
      role: "TUTOR DEL GRUPO",
      avatarUrl: "/images/group/campeones_del_flow/AgustinTutor.jpg",
      bio: "Acompaña al grupo desde 2026. Trabaja desde una mirada centrada en la expresión y los vínculos.",
      quote: "Acá nadie tiene que hacerlo perfecto.",
      formation: [
        "Lic. en Psicología (UNLP)",
        "Tecnicatura en Psicologìa del deporte"
      ]
    },
    objective: "Crear un espacio de confianza donde cada integrante pueda expresarse libremente, compartir intereses, desarrollar proyectos y fortalecer los lazos.",
    interview: {
      qaList: [
        { question: "¿Cómo es tu nombre completo?", answer: "Agustín Pis Perez." },
        { question: "¿Qué edad tenés?", answer: "29 años." },
        { question: "¿De qué equipo sos?", answer: "De Estudiantes de La Plata, de corazón." },
        { question: "¿Tenés novia?", answer: "Sí, hace 4 años." },
        { question: "¿Qué estás estudiando?", answer: "Estoy terminando la Licenciatura en Psicología." },
        { question: "¿Qué es lo que más te gusta de ser nuestro tutor?", answer: "Acompañarlos en su crecimiento, escuchar sus ideas y ver cómo se apoyan entre ellos." },
        { question: "¿Hay algo que te gusta hacer en tu tiempo libre?", answer: "Tocar la guitarra, jugar al fútbol y salir a caminar." },
        { question: "¿Algún momento del grupo que recuerdes mucho?", answer: "La vez que hicimos la noche de talentos. Fue increíble." },
        { question: "¿Qué aprendiste de los chicos?", answer: "Que cada uno tiene algo único para aportar." }
      ],
      keywords: ["Confianza", "Humor", "Compañerismo"]
    },
    members: [
      { name: "Adrián", icon: "star", details: ["Escuchar cumbia", "Jugar a la pelota", "Juegos de mesa"], avatarUrl: "/images/group/campeones_del_flow/Adian.jpg" },
      { name: "Antonella", icon: "heart", details: ["Pintar mandalas", "Cantar", "Las plantas"], avatarUrl: "/images/group/campeones_del_flow/Antonella.jpg" },
      { name: "Antonio", icon: "smile", details: ["Videojuegos", "Hacer chistes", "Los animales"], avatarUrl: "/images/group/campeones_del_flow/Antonio.jpg" },
      { name: "Clara", icon: "sun", details: ["Hacer pulseras", "Escuchar música", "Pasear en el parque"], avatarUrl: "/images/group/campeones_del_flow/Clara.jpg" },
      { name: "Erwin", icon: "music", details: ["Jugar al ajedrez", "Cocinar para amigos", "Tocar la guitarra"], avatarUrl: "/images/group/campeones_del_flow/Erwin.jpg" },
      { name: "Miguel", icon: "coffee", details: ["Fútbol", "Compartir mates", "Ver películas"], avatarUrl: "/images/group/campeones_del_flow/Miguel.jpg" }
    ],
    messages: [
      { text: "Gracias por bancarnos siempre y por escucharnos.", author: "Miguel", color: "yellow" },
      { text: "Sos buen compañero, siempre estás.", author: "Antonella", color: "pink" },
      { text: "Gracias por enseñar desde el corazón.", author: "Clara", color: "green" },
      { text: "Por más mates y charlas como las de siempre :)", author: "Antonio", color: "pink" }
    ],
    moments: [
      { imageUrl: "/images/group/campeones_del_flow/todosDos.jpg", caption: "❤️", rotation: -3 },
      { imageUrl: "/images/group/campeones_del_flow/todos.jpg", caption: "Impro general", rotation: 4 }
    ],
    momentsCaption: "Seguimos creciendo juntos"
  },
  {
    slug: "buenas-vibras",
    name: "Buenas Vibras",
    description: "Conversaciones, juegos y momentos cotidianos compartidos desde el cuidado.",
    memberCount: 10,
    establishedYear: 2026,
    heroCollage: [
      "/images/group/buenas_vibras/Brian.jpg",
      "/images/group/buenas_vibras/Gianni.jpg",
      "/images/group/buenas_vibras/Martina.jpg"
    ],
    tutor: {
      name: "Catalina",
      role: "TUTORA DEL GRUPO",
      avatarUrl: "/images/group/buenas_vibras/Catalina - Tutora.jpg",
      bio: "Coordinadora de talleres de integración. Cree en el poder de la cotidianidad y el juego para sanar vínculos.",
      quote: "El encuentro verdadero ocurre cuando nos escuchamos despacio.",
      formation: [
        "Terapista Ocupacional",
        "Especialista en dinámicas lúdicas comunitarias",
        "Tallerista de estimulación cognitiva y social"
      ]
    },
    objective: "🤝 Participar: Animarnos a involucrarnos y ser parte de distintas actividades.🚶 Autonomía: Ganar confianza para movernos cada vez con mayor independencia.❤️ Bienestar: Cuidar nuestras emociones y los vínculos con los demás. 👥 Trabajo en equipo: Aprender a compartir, colaborar y construir juntos. 💬 Comunicación: Encontrar nuevas formas de expresar lo que pensamos y sentimos.",
    interview: {
      qaList: [
        { question: "¿Cómo nace 'Buenas Vibras'?", answer: "Nació de la necesidad de tener una pausa, un espacio para charlar tranquilos y distendidos." },
        { question: "¿Qué valor tiene el mate en tu grupo?", answer: "Es central. El mate circula como una palabra compartida, nos da el ritmo para escucharnos." },
        { question: "¿Qué juego es el que más disfrutan?", answer: "El Ludo y las cartas. Se arman campeonatos muy divertidos que duran semanas." },
        { question: "¿Cómo definís tu rol?", answer: "Como una facilitadora. Yo preparo el espacio, pero el calor y la vibra la traen ellos." },
        { question: "¿Qué cosas te hacen reír?", answer: "Las ocurrencias espontáneas. A veces nos quedamos tentados de la risa por cosas muy simples." },
        { question: "¿Hay espacio para momentos difíciles?", answer: "Sí, claro. Cuando alguien viene cansado o triste, el grupo sabe arroparlo y escuchar." },
        { question: "¿Qué aprendiste de este grupo?", answer: "Que las cosas más profundas ocurren en las charlas más cotidianas." }
      ],
      keywords: ["Escucha", "Mateada", "Cuidado"]
    },
    members: [
      { name: "Brian", icon: "bolt", details: ["Música y ritmo", "Fútbol con amigos", "Compartir mates"], avatarUrl: "/images/group/buenas_vibras/Brian.jpg" },
      { name: "Gianni", icon: "star", details: ["Juegos de estrategia", "Dibujar cómics", "Escuchar rock"], avatarUrl: "/images/group/buenas_vibras/Gianni.jpg" },
      { name: "Martina", icon: "heart", details: ["Pintar mandalas", "Hacer pulseras", "Cuidar plantas"], avatarUrl: "/images/group/buenas_vibras/Martina.jpg" },
      { name: "Valentina", icon: "sun", details: ["Bailar coreografías", "Ver series y pelis", "Salir al parque"], avatarUrl: "/images/group/buenas_vibras/Valentina.jpg" },
      { name: "Yazmin", icon: "music", details: ["Escribir poesía", "Tocar el piano", "Mates dulces"], avatarUrl: "/images/group/buenas_vibras/Yazmin.jpg" }
    ],
    messages: [
      { text: "Gracias Catalina por tu paciencia infinita y tu dulzura.", author: "Martina", color: "blue" },
      { text: "Los mates de los viernes son lo mejor de toda la semana.", author: "Gianni", color: "yellow" },
      { text: "Gracias por hacernos reír tanto y escucharnos siempre.", author: "Brian", color: "green" }
    ],
    moments: [
      { imageUrl: "/images/group/buenas_vibras/Brian.jpg", caption: "Compartiendo momentos", rotation: -2 },
      { imageUrl: "/images/group/buenas_vibras/Gianni.jpg", caption: "Tarde de risas", rotation: 3 },
      { imageUrl: "/images/group/buenas_vibras/Martina.jpg", caption: "Risas compartidas", rotation: -4 }
    ],
    momentsCaption: "El valor de compartir momentos simples"
  },
  {
    slug: "corazones-en-equipo",
    name: "Corazones en Equipo",
    description: "Un espacio de encuentro, recreación y apoyo mutuo donde cada corazón late en sintonía.",
    memberCount: 9,
    establishedYear: 2026,
    heroCollage: [
      "/images/group/corazones_en_equipo/Dalila.jpg",
      "/images/group/corazones_en_equipo/Lucia.jpg",
      "/images/group/corazones_en_equipo/Lujan.jpg"
    ],
    tutor: {
      name: "Sebastián",
      role: "TUTOR DEL GRUPO",
      avatarUrl: "/images/group/corazones_en_equipo/Sebastian - Tutor.jpg",
      bio: "Coordinador de actividades recreativas y artísticas. Apasionado por la música y el trabajo grupal.",
      quote: "La música y el juego nos conectan desde el alma.",
      formation: [
        "Profesor de Educación Musical",
        "Tallerista de Expresión Corporal",
        "Especialista en abordajes integrales comunitarios"
      ]
    },
    objective: {
      resume: "Promover la autonomía, la comunicación y el compromiso con el grupo, desarrollando habilidades para la vida cotidiana, la convivencia y la participación social.", 
      items: [
        {subtitle: "🤝 Trabajar en equipo", text: "Aprender a compartir, colaborar y construir junto a otros."}, 
        {subtitle: "💬 Comunicarnos mejor", text: "Encontrar nuevas formas de expresar lo que pensamos, sentimos y necesitamos."},
        {subtitle: "🌱 Ser más autónomos", text: "Desarrollar habilidades para participar cada vez con mayor independencia en la vida cotidiana."},
        {subtitle: "❤️ Fortalecer los vínculos", text: "Crear un espacio donde todos se sientan parte, respetados y acompañados."},
        {subtitle: "⭐ Participar activamente", text: "Asumir pequeños desafíos, responsabilidades y roles dentro del grupo.Consolidar vínculos de confianza y compañerismo, promoviendo la participación activa en proyectos artísticos y expresivos."},
        ]} 

,
    interview: {
      qaList: [
        { question: "¿Cómo surge Corazones en Equipo?", answer: "Nace del deseo de unir nuestras pasiones por el arte, la música y el juego en un solo gran latido." },
        { question: "¿Qué rol juega la música en tus talleres?", answer: "Es fundamental, nos ayuda a sintonizar nuestros ritmos, liberar tensiones y crear un clima alegre." },
        { question: "¿Qué es lo que más valorás del grupo?", answer: "La inmensa empatía que demuestran. Siempre están listos para escucharse y apoyarse." }
      ],
      keywords: ["Unidad", "Expresión", "Empatía"]
    },
    members: [
      { name: "Dalila", icon: "heart", details: ["Pintar y dibujar", "Escuchar música pop", "Juegos de mesa"], avatarUrl: "/images/group/corazones_en_equipo/Dalila.jpg" },
      { name: "Lucia", icon: "sun", details: ["Hacer manualidades", "Tomar mates charlando", "Pasear"], avatarUrl: "/images/group/corazones_en_equipo/Lucia.jpg" },
      { name: "Lujan", icon: "star", details: ["Cocinar cosas ricas", "Cuidar las plantas", "Escuchar radio"], avatarUrl: "/images/group/corazones_en_equipo/Lujan.jpg" },
      { name: "Miguel", icon: "smile", details: ["Fútbol", "Jugar a las cartas", "Compartir risas"], avatarUrl: "/images/group/corazones_en_equipo/Miguel.jpg" },
      { name: "Milagros", icon: "music", details: ["Bailar y cantar", "Hacer pulseras", "Ver películas"], avatarUrl: "/images/group/corazones_en_equipo/Milagros.jpg" },
      { name: "Valentin", icon: "bolt", details: ["Videojuegos", "Hacer chistes", "Salir a caminar"], avatarUrl: "/images/group/corazones_en_equipo/Valentin.jpg" }
    ],
    messages: [
      { text: "Gracias Sebas por traer siempre tanta buena energía y música.", author: "Dalila", color: "pink" },
      { text: "Nos hacés sentir parte de un equipo de verdad.", author: "Valentin", color: "green" },
      { text: "Gracias por la paciencia y los momentos compartidos.", author: "Lucia", color: "yellow" }
    ],
    moments: [
      { imageUrl: "/images/group/corazones_en_equipo/Dalila.jpg", caption: "Talleres y expresión", rotation: -2 },
      { imageUrl: "/images/group/corazones_en_equipo/Lucia.jpg", caption: "Creatividad compartida", rotation: 3 },
      { imageUrl: "/images/group/corazones_en_equipo/Lujan.jpg", caption: "Risas y mates", rotation: -3 }
    ],
    momentsCaption: "Sintonizando nuestros corazones"
  },
  {
    slug: "la-banda-colorida",
    name: "La banda colorida",
    description: "Un grupo atravesado por lo artístico, lo visual y las formas libres de crear.",
    memberCount: 8,
    establishedYear: 2026,
    heroCollage: [
      "/images/group/la_banda_colorida/Tamara - Tutora.jpg"
    ],
    tutor: {
      name: "Tamara",
      role: "TUTORA DEL GRUPO",
      avatarUrl: "/images/group/la_banda_colorida/Tamara - Tutora.jpg",
      bio: "Artista visual y docente de educación artística. Impulsora del muralismo comunitario como herramienta social.",
      quote: "El arte no es para hacerlo bien, es para liberarse.",
      formation: [
        "Acompañante terapèutica -",
        "Profesora de educación especial",
    
      ]
    },
    objective: 
    {
      resume: "",
      items: [
        {
          subtitle: "❤️ Sentirnos bien",
          text: "Promover el bienestar, la relajación y el disfrute en un espacio cuidado y seguro."
        }, 
        {
          subtitle: "💬 Encontrar nuevas formas de comunicarnos",
          text: "Favorecer la expresión, el intercambio y la participación respetando el modo de comunicarse de cada persona"
        }, 
        {
          subtitle: "🤝 Crear vínculos",
          text: "Compartir experiencias que fortalezcan el encuentro con los compañeros, las familias y el equipo."
        }, 
        {
          subtitle: "🧠 Construir recuerdos",
          text: "Generar experiencias significativas que fortalezcan la memoria afectiva y el sentido de pertenencia."
        }, 
        {
          subtitle: "🌱 Participar a nuestro ritmo",
          text: "GAcompañar a cada persona desde sus posibilidades, respetando sus tiempos, intereses y necesidades."
        }, 
      ]
    }, 
    interview: {
      qaList: [
        { question: "¿Por qué pintar juntos?", answer: "Porque el color colectivo tiene una fuerza que el lienzo individual no puede igualar." },
        { question: "¿Qué hacés con los errores en la pintura?", answer: "Los transformamos en una nueva idea. El error en el arte es el inicio de tu propio estilo." },
        { question: "¿Cuál es el mayor logro de este grupo?", answer: "Ver la sonrisa de todos cuando inauguramos el gran mural del patio. Nos llevó un mes de trabajo." }
      ],
      keywords: ["Expresión", "Pintura", "Libertad"]
    },
    members: [
      { name: "Lucas", icon: "star", details: ["Mezclar colores", "Dibujar cómics y mangas", "Escuchar rap urbano"] },
      { name: "Elena", icon: "heart", details: ["Pintar con acuarelas", "Escuchar música clásica", "Hacer collages"] },
      { name: "Marcos", icon: "music", details: ["Tocar la batería", "Grafiti y lettering", "Ver pelis de acción"] },
      { name: "Cami", icon: "smile", details: ["Modelar arcilla", "Adoptar gatitos", "Decorar tortas dulces"] }
    ],
    messages: [
      { text: "Tamara nos diste la confianza para agarrar el pincel sin miedo.", author: "Lucas", color: "pink" },
      { text: "El taller de arte es mi cable a tierra. ¡Gracias totales!", author: "Elena", color: "yellow" }
    ],
    moments: [
      { imageUrl: "/images/group/la_banda_colorida/Tamara - Tutora.jpg", caption: "Espacio creativo", rotation: 3 }
    ],
    momentsCaption: "El color que nos une y nos expresa"
  },
  {
    slug: "quienes-somos",
    name: "¿Quiénes somos?",
    description: "Preguntas compartidas para pensar la identidad, la historia y los vínculos.",
    memberCount: 10,
    establishedYear: 2025,
    heroCollage: [
      "/images/group/quienes_somos/todos.jpg"
    ],
    tutor: {
      name: "Agustina",
      role: "TUTORA DEL GRUPO",
      avatarUrl: "/images/group/quienes_somos/Agustina - tutora.jpg",
      bio: "Licenciada en Psicología. Acompaña procesos grupales y creativos potenciando la expresión en primera persona.",
      quote: "Nuestra historia no está cerrada, la seguimos escribiendo hoy.",
      formation: [
        "Lic. en Psicología",
        "Actriz",
        
      ]
    },
    objective: "Construir un proyecto laboral  que favorezca el reconocimiento de las capacidades e intereses de cada joven, promoviendo la autonomía, el compromiso, la cooperación y la participación activa en la comunidad.,",
    interview: {
      qaList: [
        { question: "¿Qué es lo que más te gusta de trabajar en Intres?", answer: "Acompañar procesos, acompañarlos a ustedes y ver también el fruto de todo lo trabajado a lo largo de estos años, compartir las alegrías y acompañar los momentos más difíciles." },
        { question: "¿Y de trabajar con ¿Quiénes somos?, en particular con este proyecto?", answer: "Lo que más me gusta es potenciar el proyecto y el proceso creativo. Verlos a ustedes posicionarse como los creadores de este juego y hablar en primera persona de ¿qué les pasa? o ¿qué sienten?. Y apoyo a que este proyecto crezca mucho más." },
        { question: "¿De qué te recibiste?", answer: "Me recibí de Licenciada en Psicología. Tuve la suerte de que me estén acompañando y disfrutando conmigo." },
        { question: "¿Qué edad tenés?", answer: "26 años." },
        { question: "¿Tenés novio?", answer: "Sí." },
        { question: "¿Te gusta el fútbol?", answer: "No le doy mucha bolilla pero soy de Gimnasia." },
        { question: "¿Y algún otro deporte?", answer: "Soy más del palo del arte." }
      ],
      keywords: ["Proceso", "Creatividad", "Expresión"]
    },
    members: [
      { name: "Coti", icon: "sun", details: ["Escuchar viejos tangos", "Escribir un diario personal", "Cuidar a sus nietos"] },
      { name: "Martin", icon: "heart", details: ["Conversar largo", "Flores del jardín", "Escuchar la radio a la noche"] },
      { name: "Mica", icon: "coffee", details: ["Jugar al ajedrez", "Leer novelas históricas", "Café negro bien caliente"] },
      { name: "Pancho", icon: "smile", details: ["Tejer historias de vida", "Bailar folklore nacional", "Plantas de interiores"] },
      { name: "Sofi", icon: "sun", details: ["Escuchar viejos tangos", "Escribir un diario personal", "Cuidar a sus nietos"] },
      { name: "Mauro", icon: "heart", details: ["Conversar largo", "Flores del jardín", "Escuchar la radio a la noche"] },
      { name: "Andres", icon: "coffee", details: ["Jugar al ajedrez", "Leer novelas históricas", "Café negro bien caliente"] },
      { name: "Mati", icon: "smile", details: ["Tejer historias de vida", "Bailar folklore nacional", "Plantas de interiores"] },
      { name: "Tomi", icon: "sun", details: ["Escuchar viejos tangos", "Escribir un diario personal", "Cuidar a sus nietos"] },
      { name: "Lucas", icon: "heart", details: ["Conversar largo", "Flores del jardín", "Escuchar la radio a la noche"] }
    ],
    messages: [
      { text: "Nos gusta mucho viajar con ella, comer juntos, los congresos... ¡Te queremos mucho Agus!", author: "Los Pibes", color: "yellow" },
      { text: "Gracias por todo lo que aprendemos con vos y por las gorras que hicimos nuevas.", author: "Los Pibes", color: "green" }
    ],
    moments: [
      { imageUrl: "/images/group/quienes_somos/todos.jpg", caption: "Todo el equipo reunido", rotation: -2 }
    ],
    momentsCaption: "El valor de recordar de dónde venimos"
  }
];
