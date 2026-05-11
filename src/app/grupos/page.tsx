import Link from "next/link";
import { SectionHero } from "@/ui/SectionHero/SectionHero";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import styles from "./grupos.module.css";

const grupos = [
  {
    slug: "campeones-del-flow",
    category: "IDENTIDAD",
    title: "Los Campeones del Flow",
    description: "Un espacio donde el movimiento, la música y el humor construyen pertenencia.",
    metadata: "COORDINACIÓN EDITORIAL · 4 MIN LECTURA",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "buenas-vibras",
    category: "ENCUENTROS",
    title: "Buenas Vibras",
    description: "Conversaciones, juegos y momentos cotidianos compartidos desde el cuidado.",
    metadata: "COORDINACIÓN EDITORIAL · 3 MIN LECTURA",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "la-banda-colorida",
    category: "EXPRESIÓN",
    title: "La banda colorida",
    description: "Un grupo atravesado por lo artístico, lo visual y las formas libres de crear.",
    metadata: "COORDINACIÓN EDITORIAL · 5 MIN LECTURA",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecea8f82?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "quienes-somos",
    category: "REFLEXIÓN",
    title: "¿Quiénes somos?",
    description: "Preguntas compartidas para pensar la identidad, la historia y los vínculos.",
    metadata: "COORDINACIÓN EDITORIAL · 6 MIN LECTURA",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "sin-etiquetas",
    category: "COMUNIDAD",
    title: "Sin Etiquetas",
    description: "Un espacio para encontrarse desde la singularidad y sin definiciones cerradas.",
    metadata: "COORDINACIÓN EDITORIAL · 4 MIN LECTURA",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function GruposPage() {
  return (
    <main>
      <SectionHero
        variant="orange"
        category="GRUPOS"
        subCategory="SECCIÓN"
        title="CONOCÉ NUESTROS GRUPOS"
        subtitle="Cinco maneras distintas de habitar el centro. Cada grupo tiene su ritmos, sus códigos y su forma de encontrarse."
        metadata="CENTRO DE DÍA · INTRES"
        icon={faUsers}
      >
        <div className={styles.gruposList}>
          {grupos.map((grupo, index) => (
            <Link 
              key={grupo.title} 
              href={`/grupos/${grupo.slug}`}
              className={`${styles.grupoItem} ${index % 2 !== 0 ? styles.reverse : ""}`}
            >
              <div className={styles.imageContainer}>
                <img src={grupo.image} alt={grupo.title} className={styles.image} />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.content}>
                <span className={styles.itemCategory}>{grupo.category}</span>
                <h2 className={styles.itemTitle}>{grupo.title}</h2>
                <p className={styles.itemDescription}>{grupo.description}</p>
                <span className={styles.itemMetadata}>{grupo.metadata}</span>
              </div>
            </Link>
          ))}
        </div>
      </SectionHero>
    </main>
  );
}
