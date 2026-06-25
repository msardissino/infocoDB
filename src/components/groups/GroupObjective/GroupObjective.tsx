import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import styles from "./GroupObjective.module.css";

import { GroupObjectiveStructure } from "@/types/group";

interface GroupObjectiveProps {
  objective: string | GroupObjectiveStructure;
}

export const GroupObjective: React.FC<GroupObjectiveProps> = ({ objective }) => {
  const isString = typeof objective === "string";

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.iconCircle}>
          <FontAwesomeIcon icon={faBullseye} />
        </div>
        <h3 className={styles.cardTitle}>OBJETIVO DEL GRUPO</h3>
      </div>
      
      <div className={styles.cardBody}>
        {isString ? (
          <p className={styles.objectiveText}>{objective}</p>
        ) : (
          <div className={styles.structuredObjective}>
            {objective.resume && (
              <p className={styles.resumeText}>{objective.resume}</p>
            )}
            <ul className={styles.itemsList}>
              {objective.items.map((item, idx) => (
                <li key={idx} className={styles.item}>
                  <strong className={styles.itemSubtitle}>{item.subtitle}:</strong>{" "}
                  <span className={styles.itemText}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Visual decorators: paint splash & custom hand-drawn outline heart */}
        <div className={styles.paintSplash}></div>
        <div className={styles.heartDecorator}>
          <svg 
            viewBox="0 0 24 24" 
            className={styles.heartSvg}
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};
