import { SectionHero } from "@/ui/SectionHero/SectionHero";
import { faCamera, faHammer } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from "@/ui/Breadcrumb/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./galeria.module.css";

export default function GaleriaPage() {
  return (
    <main>
      <SectionHero
        variant="light"
        category="GALERIA"
        subCategory="REGISTRO VISUAL"
        title="NUESTRA VIDA EN IMAGENES"
        subtitle="Un archivo de momentos, obras y encuentros capturados a traves del lente."
        metadata="CENTRO DE DIA · INTRES"
        icon={faCamera}
      >
        <div className={styles.container}>
          <Breadcrumb items={[{ label: "GALERÍA" }]} />
          
          <div className={styles.grid}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={styles.skeletonItem}>
                <div className={styles.skeletonOverlay}>
                  <FontAwesomeIcon icon={faCamera} />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.constructionView}>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={faHammer} />
            </div>
            <h2 className={styles.title}>GALERÍA EN PROCESO</h2>
            <p className={styles.message}>
              Estamos seleccionando las mejores capturas de nuestros encuentros y talleres. 
              Pronto podrás recorrer nuestra historia visual completa.
            </p>
          </div>
        </div>
      </SectionHero>
    </main>
  );
}
