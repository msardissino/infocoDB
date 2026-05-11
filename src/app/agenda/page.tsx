import { SectionHero } from "@/ui/SectionHero/SectionHero";
import { faCalendarDay, faHammer } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from "@/ui/Breadcrumb/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./agenda.module.css";

export default function AgendaPage() {
  return (
    <main>
      <SectionHero
        variant="dark"
        category="AGENDA"
        subCategory="SECCIÓN"
        title="LO QUE VIENE: ACTIVIDADES Y EVENTOS"
        subtitle="Mantenete al tanto de los próximos talleres, salidas y fechas especiales."
        metadata="ACTUALIZADO: ABRIL 2026"
        icon={faCalendarDay}
      >
        <div className={styles.container}>
          <Breadcrumb items={[{ label: "AGENDA" }]} />
          
          <div className={styles.constructionView}>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={faHammer} />
            </div>
            <h2 className={styles.title}>CALENDARIO EN PREPARACIÓN</h2>
            <p className={styles.message}>
              Nuestra agenda se construye colectivamente cada mes. 
              Estamos terminando de coordinar las fechas de Mayo para que no te pierdas nada.
            </p>
            <div className={styles.placeholderGrid}>
              <div className={styles.dashedBox}>MAY 2026</div>
            </div>
          </div>
        </div>
      </SectionHero>
    </main>
  );
}
