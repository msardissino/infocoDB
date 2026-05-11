import Link from "next/link";
import { SectionHero } from "@/ui/SectionHero/SectionHero";
import { 
  faUsers, 
  faLeaf, 
  faPencilAlt, 
  faMusic, 
  faUtensils,
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./actividades.module.css";

const actividades = [
  {
    slug: "cine-charla",
    category: "DENTRO DEL CENTRO",
    title: "Cine + Charla",
    description: "Proyección de cortometrajes seguida de un espacio de conversación para compartir ideas y miradas.",
    date: "SÁB 24 DE MAYO",
    time: "15:00 HS",
    location: "SALÓN PRINCIPAL",
    icon: faUsers,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "encuentro-aire-libre",
    category: "FUERA DEL CENTRO",
    title: "Encuentro al aire libre",
    description: "Una tarde para mover el cuerpo, respirar y conectar con la naturaleza.",
    date: "DOM 25 DE MAYO",
    time: "16:00 HS",
    location: "PARQUE CENTENARIO",
    icon: faLeaf,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "laboratorio-creativo",
    category: "DENTRO DEL CENTRO",
    title: "Laboratorio creativo",
    description: "Exploramos técnicas y materiales en un espacio para crear sin reglas.",
    date: "VIE 30 DE MAYO",
    time: "14:30 HS",
    location: "TALLER 2",
    icon: faPencilAlt,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "musica-en-vivo",
    category: "FUERA DEL CENTRO",
    title: "Música en vivo",
    description: "Salida para disfrutar de bandas locales y compartir buena música.",
    date: "SÁB 31 DE MAYO",
    time: "19:00 HS",
    location: "CENTRO CULTURAL",
    icon: faMusic,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "cocina-colectiva",
    category: "DENTRO DEL CENTRO",
    title: "Cocina colectiva",
    description: "Cocinamos juntos, probamos recetas y compartimos lo que hacemos.",
    date: "MAR 3 DE JUNIO",
    time: "15:00 HS",
    location: "COCINA",
    icon: faUtensils,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function ActividadesPage() {
  return (
    <main>
      <SectionHero
        variant="dark"
        category="ACTIVIDADES"
        subCategory="SECCIÓN"
        title="Próximas actividades"
        subtitle="Propuestas abiertas y especiales que realizamos dentro y fuera del centro. Espacios para encontrarnos, aprender, expresarnos y disfrutar."
        backgroundImage="/bg-actividades.jpg"
      >
        <div className={styles.timelineContainer}>
          <div className={styles.headerAction}>
            <Link href="/agenda" className={styles.agendaButton}>
              VER AGENDA COMPLETA <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className={styles.timeline}>
            {actividades.map((act) => (
              <Link 
                key={act.slug} 
                href={`/actividades/${act.slug}`}
                className={styles.activityItem}
              >
                <div className={styles.timelineMarker}>
                  <div className={styles.iconCircle}>
                    <FontAwesomeIcon icon={act.icon} />
                  </div>
                </div>
                
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <img src={act.image} alt={act.title} className={styles.image} />
                    <div className={styles.imageOverlay}></div>
                  </div>
                  
                  <div className={styles.content}>
                    <span className={styles.itemCategory}>{act.category}</span>
                    <h2 className={styles.itemTitle}>{act.title}</h2>
                    <p className={styles.itemDescription}>{act.description}</p>
                    
                    <div className={styles.meta}>
                      <div className={styles.metaItem}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>{act.date}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <FontAwesomeIcon icon={faClock} />
                        <span>{act.time}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>{act.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionHero>
    </main>
  );
}
