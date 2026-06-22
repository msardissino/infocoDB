import { SectionHero } from "@/ui/SectionHero/SectionHero";
import { faComments, faHammer } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from "@/ui/Breadcrumb/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./voces.module.css";

export default function VocesPage() {
  return (
    <main>
      <SectionHero
        variant="orange"
        category="VOCES"
        subCategory="SECCIÓN"
        title="LAS VOCES DE NUESTRA COMUNIDAD"
        subtitle="Entrevistas, testimonios y relatos en primera persona sobre la vida en el centro."
        metadata="EDICIÓN N° 1 · ABRIL 2026"
        icon={faComments}
        backgroundImage="/images/covers/cover-voces.jpeg"
      >
        <div className={styles.container}>
          <Breadcrumb items={[{ label: "VOCES" }]} />
          
          <div className={styles.constructionView}>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={faHammer} />
            </div>
            <h2 className={styles.title}>PRÓXIMAMENTE</h2>
            <p className={styles.message}>
              &quot;Esta sección está dedicada a escuchar. Aquí encontrarás las historias de quienes hacemos INTRES día a día.&quot;
            </p>
            <div className={styles.divider}></div>
            <p className={styles.status}>ESTAMOS EDITANDO NUEVOS RELATOS</p>
          </div>
        </div>
      </SectionHero>
    </main>
  );
}
