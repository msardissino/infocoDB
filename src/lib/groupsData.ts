import { GroupDetail } from "@/types/group";

export const GROUPS_DATA: GroupDetail[] = [
  {
    slug: "campeones-del-flow",
    name: "Campeones del Flow",
    description: "Un grupo que elige encontrarse, reír, crear y disfrutar cada momento juntos.",
    memberCount: 6,
    establishedYear: 2023,
    heroCollage: [
      "/images/group/campeones_del_flow/todos.jpg",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop"
    ],
    tutor: {
      name: "Agustín Pis Perez",
      role: "TUTOR DEL GRUPO",
      avatarUrl: "/images/group/campeones_del_flow/AgustinTutor.jpg",
      bio: "Acompaña al grupo desde 2021. Trabaja desde una mirada centrada en la expresión y los vínculos.",
      quote: "Acá nadie tiene que hacerlo perfecto.",
      formation: [
        "Lic. en Psicología (UBA)",
        "Posgrado en salud mental comunitaria",
        "Diplomatura en abordaje terapéutico grupal"
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
      { imageUrl: "/images/group/campeones_del_flow/todosDos.jpg", caption: "Patio acústico", rotation: -3 },
      { imageUrl: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=400&auto=format&fit=crop", caption: "Impro general", rotation: 4 },
      { imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop", caption: "Charla de miércoles", rotation: -2 },
      { imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop", caption: "Noche de Talentos", rotation: 3 }
    ],
    momentsCaption: "Seguimos creciendo juntos"
  },
  {
    slug: "buenas-vibras",
    name: "Buenas Vibras",
    description: "Conversaciones, juegos y momentos cotidianos compartidos desde el cuidado.",
    memberCount: 8,
    establishedYear: 2024,
    heroCollage: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop"
    ],
    tutor: {
      name: "Ana Laura Estévez",
      role: "TUTORA DEL GRUPO",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      bio: "Coordinadora de talleres de integración. Cree en el poder de la cotidianidad y el juego para sanar vínculos.",
      quote: "El encuentro verdadero ocurre cuando nos escuchamos despacio.",
      formation: [
        "Terapista Ocupacional (UNQ)",
        "Especialista en dinámicas lúdicas comunitarias",
        "Tallerista de estimulación cognitiva y social"
      ]
    },
    objective: "Fomentar un espacio de contención afectiva a través del juego, la palabra compartida y la ritualidad del mate diario.",
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
      { name: "Pedro", icon: "leaf", details: ["Hacer la huerta", "Tomar mate dulce", "Caminar en el parque"], avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" },
      { name: "Marta", icon: "coffee", details: ["Tejer pulóveres", "Contar historias de antes", "Cuidar las plantas"], avatarUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=150&auto=format&fit=crop" },
      { name: "Gaby", icon: "bolt", details: ["Fútbol de mesa", "Escuchar rock nacional", "Reparar objetos rotos"], avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop" },
      { name: "Sofi", icon: "sun", details: ["Ejercicios de yoga", "Escribir reflexiones", "Mimarse con gatos"], avatarUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=150&auto=format&fit=crop" }
    ],
    messages: [
      { text: "Gracias Ana por tu paciencia infinita y tu dulzura.", author: "Pedro", color: "blue" },
      { text: "Los mates de los viernes son lo mejor de toda la semana.", author: "Marta", color: "yellow" },
      { text: "Gracias por hacernos reír tanto y escucharnos siempre.", author: "Gaby", color: "green" }
    ],
    moments: [
      { imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop", caption: "Juegos de mesa", rotation: -2 },
      { imageUrl: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=400&auto=format&fit=crop", caption: "Tarde de mates", rotation: 3 },
      { imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop", caption: "Risas compartidas", rotation: -4 }
    ],
    momentsCaption: "El valor de compartir momentos simples"
  },
  {
    slug: "la-banda-colorida",
    name: "La banda colorida",
    description: "Un grupo atravesado por lo artístico, lo visual y las formas libres de crear.",
    memberCount: 9,
    establishedYear: 2022,
    heroCollage: [
      "https://images.unsplash.com/photo-1460661419201-fd4cecea8f82?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541411591963-95d11b8ca2ea?q=80&w=600&auto=format&fit=crop"
    ],
    tutor: {
      name: "Santiago Bernasconi",
      role: "TUTOR DEL GRUPO",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      bio: "Artista visual y docente de educación artística. Impulsor del muralismo comunitario como herramienta social.",
      quote: "El arte no es para hacerlo bien, es para liberarse.",
      formation: [
        "Lic. en Artes Visuales (UNA)",
        "Tallerista de arte terapia comunitaria",
        "Coordinador de proyectos de arte callejero e integración"
      ]
    },
    objective: "Dar rienda suelta a la imaginación mediante técnicas plásticas, texturas y colores, dejando plasmada nuestra identidad en las paredes.",
    interview: {
      qaList: [
        { question: "¿Por qué pintar juntos?", answer: "Porque el color colectivo tiene una fuerza que el lienzo individual no puede igualar." },
        { question: "¿Qué hacés con los errores en la pintura?", answer: "Los transformamos en una nueva idea. El error en el arte es el inicio de tu propio estilo." },
        { question: "¿Cuál es el mayor logro de este grupo?", answer: "Ver la sonrisa de todos cuando inauguramos el gran mural del patio. Nos llevó un mes de trabajo." },
        { question: "¿Qué materiales prefieren?", answer: "La pintura acrílica y las acuarelas, pero a veces experimentamos con collage de diarios." },
        { question: "¿Se escucha música mientras pintan?", answer: "Sí, de todo. Desde folclore hasta rock nacional. La música ayuda a liberar la mano." },
        { question: "¿Qué le dirías a alguien que dice 'no sé pintar'?", answer: "Que venga igual. No buscamos perfección, buscamos expresar lo que llevamos dentro." }
      ],
      keywords: ["Expresión", "Pintura", "Libertad"]
    },
    members: [
      { name: "Lucas", icon: "star", details: ["Mezclar colores", "Dibujar cómics y mangas", "Escuchar rap urbano"], avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
      { name: "Elena", icon: "heart", details: ["Pintar con acuarelas", "Escuchar música clásica", "Hacer collages"], avatarUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=150&auto=format&fit=crop" },
      { name: "Marcos", icon: "music", details: ["Tocar la batería", "Grafiti y lettering", "Ver pelis de acción"], avatarUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=150&auto=format&fit=crop" },
      { name: "Cami", icon: "smile", details: ["Modelar arcilla", "Adoptar gatitos", "Decorar tortas dulces"], avatarUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop" }
    ],
    messages: [
      { text: "Santi nos diste la confianza para agarrar el pincel sin miedo.", author: "Lucas", color: "pink" },
      { text: "El taller de arte es mi cable a tierra. ¡Gracias totales!", author: "Elena", color: "yellow" },
      { text: "Por más paredes llenas de color y buena música de fondo.", author: "Marcos", color: "green" }
    ],
    moments: [
      { imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecea8f82?q=80&w=400&auto=format&fit=crop", caption: "Manos a la obra", rotation: 3 },
      { imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop", caption: "Taller creativo", rotation: -3 },
      { imageUrl: "https://images.unsplash.com/photo-1541411591963-95d11b8ca2ea?q=80&w=400&auto=format&fit=crop", caption: "Detalle del mural", rotation: 2 }
    ],
    momentsCaption: "El color que nos une y nos expresa"
  },
  {
    slug: "quienes-somos",
    name: "¿Quiénes somos?",
    description: "Preguntas compartidas para pensar la identidad, la historia y los vínculos.",
    memberCount: 7,
    establishedYear: 2021,
    heroCollage: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop"
    ],
    tutor: {
      name: "Laura Benítez",
      role: "TUTORA DEL GRUPO",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      bio: "Trabajadora Social y especialista en memoria y derechos humanos. Le apasionan los relatos de vida y las charlas circulares.",
      quote: "Nuestra historia no está cerrada, la seguimos escribiendo hoy.",
      formation: [
        "Lic. en Trabajo Social (UBA)",
        "Diplomada en Memoria Colectiva y DDHH",
        "Facilitadora de círculos de diálogo e historia oral"
      ]
    },
    objective: "Explorar la historia personal y colectiva, reflexionar sobre nuestros sueños y construir un espacio de reconocimiento mutuo.",
    interview: {
      qaList: [
        { question: "¿Cómo nace esta propuesta?", answer: "Nació de la curiosidad por las historias de vida de las personas que habitan el centro. Cada uno es un mundo." },
        { question: "¿Cuál es la pregunta más difícil que se hicieron?", answer: "¿Quiénes queremos ser de ahora en adelante? Cuesta responderla, pero abre muchos sueños." },
        { question: "¿Qué elementos usan para recordar?", answer: "Traemos fotos viejas, música de nuestra adolescencia, o incluso recetas familiares antiguas." },
        { question: "¿Qué te inspira de este grupo?", answer: "Ver la ternura con la que se escuchan unos a otros cuando recuerdan sus raíces y sus caminos." },
        { question: "¿Hay lágrimas?", answer: "A veces sí, de emoción al sanar el pasado. Pero siempre terminamos compartiendo un mate y sonriendo." }
      ],
      keywords: ["Memoria", "Identidad", "Preguntas"]
    },
    members: [
      { name: "Juani", icon: "sun", details: ["Escuchar viejos tangos", "Escribir un diario personal", "Cuidar a sus nietos"], avatarUrl: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=150&auto=format&fit=crop" },
      { name: "Estela", icon: "heart", details: ["Conversar largo", "Flores del jardín", "Escuchar la radio a la noche"], avatarUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=150&auto=format&fit=crop" },
      { name: "Bruno", icon: "coffee", details: ["Jugar al ajedrez", "Leer novelas históricas", "Café negro bien caliente"], avatarUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop" },
      { name: "Marian", icon: "smile", details: ["Tejer historias de vida", "Bailar folklore nacional", "Plantas de interiores"], avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150&auto=format&fit=crop" }
    ],
    messages: [
      { text: "Laura nos enseñas a valorar nuestra propia voz y recuerdos.", author: "Juani", color: "yellow" },
      { text: "Tus preguntas nos hacen pensar y reír a la vez.", author: "Estela", color: "green" },
      { text: "Gracias por armar este círculo tan cálido y seguro.", author: "Bruno", color: "blue" }
    ],
    moments: [
      { imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop", caption: "Círculo de charla", rotation: -2 },
      { imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop", caption: "Fotos antiguas", rotation: 3 },
      { imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop", caption: "Escucha mutua", rotation: -3 }
    ],
    momentsCaption: "El valor de recordar de dónde venimos"
  },
  {
    slug: "sin-etiquetas",
    name: "Sin Etiquetas",
    description: "Un espacio para encontrarse desde la singularidad y sin definiciones cerradas.",
    memberCount: 8,
    establishedYear: 2023,
    heroCollage: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop"
    ],
    tutor: {
      name: "Mateo Ferreyra",
      role: "TUTOR DEL GRUPO",
      avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
      bio: "Educador popular e integrador social con enfoque en diversidad e inclusión. Apasionado del teatro foro y el movimiento libre.",
      quote: "No encajar en ninguna caja es el mejor lugar para encontrarse.",
      formation: [
        "Prof. de Educación Popular (UPMPM)",
        "Especialista en Teatro del Oprimido y expresión",
        "Coordinador de talleres de expresión corporal y juego libre"
      ]
    },
    objective: "Habitar un espacio libre de juicios y categorías impuestas, donde cada quien pueda explorar su singularidad a su propio ritmo.",
    interview: {
      qaList: [
        { question: "¿Qué significa 'Sin Etiquetas'?", answer: "Poder ser hoy una cosa y mañana otra, sin la presión de tener que encajar en una definición rígida." },
        { question: "¿Cómo es la dinámica grupal?", answer: "Hacemos dinámicas corporales, teatro espontáneo y, sobre todo, reflexionamos y nos reímos de los prejuicios." },
        { question: "¿Qué te conmueve de los encuentros?", answer: "Ver la transformación de alguien que entra tímido o tenso y termina soltándose y bailando libre." },
        { question: "¿Cómo reacciona el grupo a lo diferente?", answer: "Con mucha curiosidad y respeto. Aprendimos que la singularidad de cada uno enriquece el espacio de todos." }
      ],
      keywords: ["Diversidad", "Aceptación", "Juego"]
    },
    members: [
      { name: "Alan", icon: "bolt", details: ["Hacer malabares", "Música electrónica", "Salir a rodar en bici"], avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
      { name: "Clara", icon: "leaf", details: ["Teatro improvisado", "Tocar el ukelele", "Pasear perros"], avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" },
      { name: "Fede", icon: "smile", details: ["Dibujar mangas", "Contar chistes", "Comer medialunas calientes"], avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop" },
      { name: "Vicky", icon: "sun", details: ["Sacar fotografías", "Buscar ropa vintage", "Cuidar plantas de balcón"], avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" }
    ],
    messages: [
      { text: "Mateo nos diste un espacio para respirar libremente y sin máscaras.", author: "Alan", color: "blue" },
      { text: "Acá puedo ser yo misma y expresarme como quiero. ¡Gracias!", author: "Clara", color: "pink" },
      { text: "Gracias por enseñarnos a reírnos de los rótulos y barreras.", author: "Fede", color: "yellow" }
    ],
    moments: [
      { imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop", caption: "Expresión libre", rotation: -3 },
      { imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop", caption: "Dinámicas de movimiento", rotation: 4 },
      { imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop", caption: "Teatro espontáneo", rotation: -2 }
    ],
    momentsCaption: "La belleza de ser únicos y libres"
  }
];
