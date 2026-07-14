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
        "Formándose en: Psicología del deporte"
      ],
      interests: ["Mate", "Bicicleta", "Senderismo", "Montaña"]
    },
    objective: {
      resume: "Acompañar a los jóvenes en la construcción de una vida adulta con mayor autonomía, brindando herramientas para participar, tomar decisiones y desenvolverse con confianza en distintos espacios de la comunidad.",
      items: [
        { subtitle: "💼 Prepararnos para la vida adulta", text: "Aprender herramientas que nos ayuden a asumir responsabilidades y tomar decisiones en la vida cotidiana." }, 
        { subtitle: "🤝 Trabajar en equipo", text: "Compartir, colaborar y aprender junto a otros, respetando las ideas y los tiempos de cada uno." },
        { subtitle: "💬 Comunicarnos mejor", text: "Encontrar nuevas formas de expresar lo que pensamos, sentimos y necesitamos." },
        { subtitle: "📱 Usar la tecnología de forma responsable", text: "Aprender a utilizar el celular, las redes y otras herramientas digitales de manera segura y consciente." },
        { subtitle: "⭐ Participar en la comunidad", text: "Animarnos a conocer nuevos espacios, ganar autonomía y construir nuestro propio proyecto de vida." }
      ]
    },
    interview: {
      qaList: [
        { question: "¿Cómo es tu nombre completo?", answer: "Agustín Pis Perez." },
        { question: "¿Qué edad tenés?", answer: "29 años." },
        { question: "¿Tenés novia?", answer: "No, no tengo" },
        { question: "¿Cual es tu profesion?/¿Qué estás estudiando?", answer: "Estoy estudiando la Licenciatura en Psicología en la UNLP" },
        { question: "¿Qué comida te gusta?", answer: " La carne en general y por supuesto que mi comida favorita es el asado 🥩" },
        { question: "¿te gusta algún deporte?", answer: "¡Si!" },
        { question: "¿Cuál?", answer: "Me gusta el deporte  y la actividad física en general. Lo que mas miro y a veces juego es al fútbol" },
        { question: "¿De qué equipo sos?", answer: "Soy hincha de River Plate." },
        { question: "¿Hay algo que te gusta hacer en tu tiempo libre?", answer: "T- Me gusta leer en mis tiempos libres; Siempre me interesó la historia y la geografía asique me gusta viajar ver cosas históricas y aprender/ver cosas y lugares nuevos. También me gusta mucho ir a la montaña y hacer senderismo" },
        { question: "¿Cómo surge \"Campeones del Flow\"?", answer: "Surge con el fin de dejar de llamar a nuestro grupo como \"el grupo de Agustin\"  porque el grupo no es mio sino que somos 10 integrantes!!! Asique les propuse elegir un nombre que nos identifique a todos, y luego de unos dias de pensar, proponer y debatir, llegamos a Los Campeones del Flow ⚽🎵" },
        { question: "¿Qué es lo que más te gusta de ser el tutor de este grupo?", answer: "Me gusta compartir mucho tiempo con ellos, conocerlos y que me conozcan. También me gusta poder acompañarlos en sus proyectos de vida y en su dia a dia" }
      ],
      keywords: ["Confianza", "Humor", "Compañerismo"]
    },
    members: [
      { name: "Adrián", icon: "star", details: ["Escuchar cumbia", "Jugar a la pelota", "Juegos de mesa"], avatarUrl: "/images/group/campeones_del_flow/Adrian.jpg" },
      { name: "Antonella", icon: "heart", details: ["Pintar mandalas", "Cantar", "Las plantas"], avatarUrl: "/images/group/campeones_del_flow/Antonella.jpg" },
      { name: "Clara", icon: "sun", details: ["Hacer pulseras", "Escuchar música", "Pasear en el parque"], avatarUrl: "/images/group/campeones_del_flow/Clara.jpg" },
      { name: "Paula", icon: "sun", details: ["Hacer pulseras", "Escuchar música", "Pasear en el parque"], avatarUrl: "/images/group/campeones_del_flow/Paula.jpg" },
      { name: "Magalí", icon: "sun", details: ["Hacer pulseras", "Escuchar música", "Pasear en el parque"] },
      { name: "Armando", icon: "sun", details: ["Hacer pulseras", "Escuchar música", "Pasear en el parque"], avatarUrl: "/images/group/campeones_del_flow/Armando.jpg" },
      { name: "Juan Pedro", icon: "sun", details: ["Hacer pulseras", "Escuchar música", "Pasear en el parque"], avatarUrl: "/images/group/campeones_del_flow/JuanPedro.jpg" },
      { name: "Matías", icon: "sun", details: ["Hacer pulseras", "Escuchar música", "Pasear en el parque"], avatarUrl: "/images/group/campeones_del_flow/Matias.jpg" },
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
      { imageUrl: "/images/group/campeones_del_flow/momento.jpg", caption: "❤️", rotation: -3 },
      { imageUrl: "/images/group/campeones_del_flow/momento1.jpg", caption: "Impro general", rotation: 4 },
      { imageUrl: "/images/group/campeones_del_flow/momento2.jpg", caption: "Compartiendo risas", rotation: -2 }
    ],
    momentsCaption: "Seguimos creciendo juntos"
  },
  {
    slug: "buenas-vibras",
    name: "Buenas Vibras",
    description: "Un espacio para apender a encontrarnos con otros, trabajar en equipo y comenzar a construir nuestro proyecto de vida adulta con los apoyos necesarios.",
    memberCount: 10,
    establishedYear: 2026,
    heroCollage: [
      "/images/group/buenas_vibras/Grupal.jpg",
      "/images/group/buenas_vibras/Brian.jpg",
      "/images/group/buenas_vibras/Gianni.jpg",
      "/images/group/buenas_vibras/Martina.jpg"
    ],
    tutor: {
      name: "Catalina",
      role: "TUTORA DEL GRUPO",
      avatarUrl: "/images/group/buenas_vibras/CatalinaTutor.jpg",
      bio: "Coordinadora de talleres de integración. Cree en el poder de la cotidianidad y el juego para sanar vínculos.",
      quote: "El encuentro verdadero ocurre cuando nos escuchamos despacio.",
      formation: [
        "Terapista Ocupacional"
      ],
      interests: ["Hockey", "Hamburguesas", "Fútbol", "Mates"]
    },
    objective: {
      resume: "",
      items: [
        { subtitle: "🤝 Participar", text: "Animarnos a involucrarnos y ser parte de distintas actividades." },
        { subtitle: "🚶 Autonomía", text: "Ganar confianza para movernos en la comunidad" },
        { subtitle: "❤️ Bienestar", text: "Cuidar nuestras emociones y los vínculos con los demás." },
        { subtitle: "👥 Trabajo en equipo", text: "Aprender a compartir, colaborar y construir juntos." },
        { subtitle: "💬 Comunicación", text: "Esucharnos y encontrar nuevas formas de expresar lo que pensamos y sentimos." }
      ]
    },
    interview: {
      qaList: [
        { question: "¿Cómo surgió el nombre 'Buenas Vibras'?", answer: "" },
        { question: "¿De qué te vas a recibir?", answer: "Este año me recibo de terapista ocupacional si todo sale bien el 13 de Julio, ya falta poco, solo un mes." },
        { question: "¿Qué deporte te gusta?", answer: "Mi deporte favorito es el Hockey, desde los 7 años que juego al Hockey. También me gusta mucho el Futbol, ahora con el mundial intento mirar todos los partidos, me gusta el deporte." },
        { question: "¿Qué te gusta comer?", answer: "Me gusta comer de todo, las hamburguesas me gustan mucho, lo confieso (ríe). También la comida que no puede faltar es la milanesa napolitana con papas fritas, me encanta" },
        { question: "¿Qué cosas te hacen reír?", answer: "Las ocurrencias espontáneas. A veces nos quedamos tentados de la risa por cosas muy simples." },
        { question: "¿Qué es lo que mas te gusta de trabajar con nosotros?", answer: "Lo que mas me gusta de trabajar con ustedes es acompañarlos en sus procesos; me gusta que crezcan, que sean autónomos, que puedan elegir y decidir. Lo que mas me gusta es acompañarlos en ese proceso" },
        { question: "¿Qué aprendiste de este grupo?", answer: "." }
      ],
      keywords: ["Escucha", "Mateada", "Cuidado"]
    },
    members: [
      { name: "Brian", icon: "bolt", details: ["Videojuegos", "Fútbol con amigos", "Sacar fotos", "Chocolates", "Tecnología", "Playa"], avatarUrl: "/images/group/buenas_vibras/Brian.jpg" },
      { name: "Verónica", icon: "bolt", details: ["Música y ritmo", "Fútbol con amigos", "Compartir mates"], avatarUrl: "/images/group/buenas_vibras/Vero.jpg" },
      { name: "Gianni", icon: "star", details: ["Futbol", "Sorpresas", "Cantar", "Escuchar música", "Actuar", "Chocolates", "Playa"], avatarUrl: "/images/group/buenas_vibras/Gianni.jpg" },
      { name: "Martina", icon: "heart", details: ["Chocolate", "Tecnología", "Sacar fotos","Café", "Arcoiris", "Gatos"], avatarUrl: "/images/group/buenas_vibras/Martina.jpg" },
      { name: "Valentina", icon: "sun", details: ["Musica", "Viajar", "Arcoiris", "Perros", "Helado", "Estrellas", "Sorpresas"], avatarUrl: "/images/group/buenas_vibras/Valentina.jpg" },
      { name: "Camilo", icon: "sun", details: ["Reir", "Viajar", "Comer", "Las estrellas", "Sorpresas"], avatarUrl: "/images/group/buenas_vibras/Camilo.jpg" },
      { name: "Marcos", icon: "music", details: ["Mate", "Hamburguesas", "Juegos", "Animales", "Correr", "Pintar", "Sorpresas"], avatarUrl: "/images/group/buenas_vibras/Marcos.jpg" },
      { name: "Juan", icon: "music", details: ["Música", "Pintar", "Café", "Helado", "Actuar", "Nadar" ], avatarUrl: "/images/group/buenas_vibras/Juan.jpg" },
      { name: "Yazmin", icon: "music", details: ["Mate", "Sol", "Música", "Pasear","Pochoclos", "Viajar", "Animales" ], avatarUrl: "/images/group/buenas_vibras/Yazmin.jpg" },
      { name: "Joaquín", icon: "smile", details: ["Fútbol con amigos", "Compartir mates", "Videojuegos"], avatarUrl: "/images/group/buenas_vibras/Joaquin.jpg" }
    ],
    messages: [
      { text: "Nos encanta trabajar con vos y buscar cosas en la compu.", author: "#Buenas vibras", color: "blue" },
      { text: "Nos gustaría irnos de viaje con vos", author: "#Buenas vibras", color: "blue" },
      { text: "Gracias por ser buena con nosotros y ayudarnos siempre.", author: "#Buenas vibras", color: "yellow" },
      { text: "No te vayas . Te queremos.", author: "#Buenas vibras", color: "green" }
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
      avatarUrl: "/images/group/corazones_en_equipo/SebastianTutor.jpg",
      bio: "Coordinador de actividades recreativas y artísticas. Apasionado por la música y el trabajo grupal.",
      quote: "La música y el juego nos conectan desde el alma.",
      formation: [
        "Acompañante terapéutico",
        "Terapista Ocupacional"
      ],
      interests: ["Música", "Arte", "Juegos", "Mates"]
    },
    objective: {
      resume: "Promover la autonomía, la comunicación y el compromiso con el grupo, desarrollando habilidades para la vida cotidiana, la convivencia y la participación en distintos espacios", 
      items: [
        { subtitle: "🤝 Trabajar en equipo", text: "Aprender a compartir, colaborar y construir junto a otros." }, 
        { subtitle: "💬 Comunicarnos mejor", text: "Encontrar nuevas formas de expresar lo que pensamos, sentimos y necesitamos." },
        { subtitle: "🌱 Ser más autónomos", text: "Desarrollar habilidades para participar cada vez con mayor independencia en la vida cotidiana." },
        { subtitle: "❤️ Fortalecer los vínculos", text: "Crear un espacio donde todos se sientan parte, respetados y acompañados." },
        { subtitle: "⭐ Participar activamente", text: "Asumir pequeños desafíos, responsabilidades y roles dentro del grupo. Consolidar vínculos de confianza y compañerismo, promoviendo la participación activa en proyectos artísticos y expresivos." }
      ]
    },
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
      { name: "Rodrigo", icon: "heart", details: ["Playa", "Música", "Chocolates", "Regalos", "Perros", "Pintar", "Música"], avatarUrl: "/images/group/corazones_en_equipo/Rodrigo.jpg" },
      { name: "Lucia", icon: "sun", details: ["Sol", "Fotos", "Pasear", "Perros", "Pochoclos", "Hamburguesas", "Cantar", "Pizza"], avatarUrl: "/images/group/corazones_en_equipo/Lucia.jpg" },
      { name: "Micaela", icon: "sun", details: ["Hacer manualidades", "Tomar mates charlando", "Pasear", "Personajes de disney"], avatarUrl: "/images/group/corazones_en_equipo/Micaela.jpg" },
      { name: "Lujan", icon: "star", details: ["Cocinar", "Peluquería", "Viajar", "Actuar", "Escuchar música", "Sol", "Gatos", "Pizza"], avatarUrl: "/images/group/corazones_en_equipo/Lujan.jpg" },
      { name: "Miguel", icon: "smile", details: ["Pelotas", "Amarillo", "Compartir risas", "Pasear"], avatarUrl: "/images/group/corazones_en_equipo/Miguel.jpg" },
      { name: "Milagros", icon: "music", details: ["Helado", "Bailar", "Futbol", "Nadar", "Papas fritas", "Fiesta"], avatarUrl: "/images/group/corazones_en_equipo/Milagros.jpg" },
      { name: "Valentin", icon: "bolt", details: ["Videojuegos", "Hacer chistes", "Actuar", "Tecnología", "Bicicleta", "Frutillas"], avatarUrl: "/images/group/corazones_en_equipo/Valentin.jpg" }
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
        "Acompañante terapéutica",
        "Profesora de educación especial"
      ],
      interests: ["Pintura", "Muralismo", "Expresión", "Libertad"]
    },
    objective: {
      resume: "",
      items: [
        {
          subtitle: "❤️ Sentirnos bien",
          text: "Promover el bienestar, la relajación y el disfrute en un espacio cuidado y seguro."
        }, 
        {
          subtitle: "💬 Encontrar nuevas formas de comunicarnos",
          text: "Favorecer la expresión, el intercambio y la participación respetando el modo de comunicarse de cada persona."
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
          text: "Acompañar a cada persona desde sus posibilidades, respetando sus tiempos, intereses y necesidades."
        }
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
      { name: "Jano", icon: "star", details: ["Mezclar colores", "Dibujar cómics y mangas", "Escuchar rap urbano"] },
      { name: "Jeremías", icon: "star", details: ["Mezclar colores", "Dibujar cómics y mangas", "Escuchar rap urbano"] },
      { name: "Valentina", icon: "star", details: ["Mezclar colores", "Dibujar cómics y mangas", "Escuchar rap urbano"] },
      { name: "Joel", icon: "star", details: ["Mezclar colores", "Dibujar cómics y mangas", "Escuchar rap urbano"] },
      { name: "José", icon: "star", details: ["Mezclar colores", "Dibujar cómics y mangas", "Escuchar rap urbano"] },
      { name: "Lucia", icon: "heart", details: ["Pintar con acuarelas", "Escuchar música clásica", "Hacer collages"] },
      { name: "Mili Da Giau", icon: "music", details: ["Tocar la batería", "Grafiti y lettering", "Ver pelis de acción"] },
      { name: "Mili Costilla", icon: "smile", details: ["Modelar arcilla", "Adoptar gatitos", "Decorar tortas dulces"] }
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
    memberCount: 8,
    establishedYear: 2025,
    heroCollage: [
      "/images/group/quienes_somos/Grupal.jpg"
    ],
    tutor: {
      name: "Agustina",
      role: "TUTORA DEL GRUPO",
      avatarUrl: "/images/group/quienes_somos/AgustinaTutora.jpg",
      bio: "Licenciada en Psicología. Acompaña procesos grupales y creativos potenciando la expresión en primera persona.",
      quote: "Nuestra historia no está cerrada, la seguimos escribiendo hoy.",
      formation: [
        "Lic. en Psicología",
        "Actriz"
      ],
      interests: ["Arte", "Teatro", "Gimnasia", "Creatividad"]
    },
    objective: "Construir un proyecto laboral que favorezca el reconocimiento de las capacidades e intereses de cada joven, promoviendo la autonomía, el compromiso, la cooperación y la participación activa en la comunidad.",
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
      { name: "Coti", icon: "sun", details: ["Escuchar viejos tangos", "Escribir un diario personal", "Cuidar a sus nietos"], avatarUrl: "/images/group/quienes_somos/Constanza.jpg" },
      { name: "Martin", icon: "heart", details: ["Conversar largo", "Flores del jardín", "Escuchar la radio a la noche"], avatarUrl: "/images/group/quienes_somos/Martin.jpg" },
      { name: "Mica", icon: "coffee", details: ["Jugar al ajedrez", "Leer novelas históricas", "Café negro bien caliente"], avatarUrl: "/images/group/quienes_somos/Micaela.jpg" },
      { name: "Mauro", icon: "heart", details: ["Conversar largo", "Flores del jardín", "Escuchar la radio a la noche"], avatarUrl: "/images/group/quienes_somos/Mauro.jpg" },
      { name: "Andres", icon: "coffee", details: ["Jugar al ajedrez", "Leer novelas históricas", "Café negro bien caliente"], avatarUrl: "/images/group/quienes_somos/Andres.jpg" },
      { name: "Mati", icon: "smile", details: ["Tejer historias de vida", "Bailar folklore nacional", "Plantas de interiores"], avatarUrl: "/images/group/quienes_somos/Matias.jpg" },
      { name: "Tomi", icon: "sun", details: ["Escuchar viejos tangos", "Escribir un diario personal", "Cuidar a sus nietos"], avatarUrl: "/images/group/quienes_somos/Tomas.jpg" },
      { name: "Lucas", icon: "heart", details: ["Conversar largo", "Flores del jardín", "Escuchar la radio a la noche"], avatarUrl: "/images/group/quienes_somos/Lucas.jpg" }
    ],
    messages: [
      { text: "Nos gusta mucho viajar con ella, comer juntos, los congresos... ¡Te queremos mucho Agus!", author: "Los Pibes", color: "yellow" },
      { text: "Gracias por todo lo que aprendemos con vos y por las gorras que hicimos nuevas.", author: "Los Pibes", color: "green" }
    ],
    moments: [
      { imageUrl: "/images/group/quienes_somos/momento2.jpg", caption: "Encuentro al aire libre", rotation: -2 },
      { imageUrl: "/images/group/quienes_somos/momento3.jpg", caption: "Creando juntos", rotation: 3 },
      { imageUrl: "/images/group/quienes_somos/momento4.jpg", caption: "Pensando palabras", rotation: -4 },
      { imageUrl: "/images/group/quienes_somos/momento5.jpg", caption: "Nuestros diseños", rotation: 2 }
    ],
    momentsCaption: "La importancia de los procesos"
  }
];
