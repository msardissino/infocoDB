import React from "react";
import { GroupInterview } from "@/types/group";
import { ScrapbookTape } from "@/ui/ScrapbookTape/ScrapbookTape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./TutorInterview.module.css";

interface TutorInterviewProps {
  interview: GroupInterview;
}

export const TutorInterview: React.FC<TutorInterviewProps> = ({ interview }) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.binderPaper}>
        {/* Washi tapes taping the notebook sheet */}
        <ScrapbookTape variant="translucent" rotation={-4} width="70px" height="20px" top="-10px" left="40px" />
        <ScrapbookTape variant="translucent" rotation={6} width="70px" height="20px" top="-10px" right="40px" />

        {/* Binder Holes (Left margin) */}
        <div className={styles.binderHoles}>
          {Array.from({ length: 10 }).map((_, idx) => (
            <div key={idx} className={styles.hole} />
          ))}
        </div>

        {/* Vertical Red Margin Line */}
        <div className={styles.marginLine}></div>

        <div className={styles.paperContent}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={faPen} className={styles.penIcon} />
            </div>
            <h3 className={styles.title}>ENTREVISTA AL TUTOR</h3>
          </div>

          {/* Q&A Grid */}
          <div className={styles.qaGrid}>
            {interview.qaList.map((item, idx) => {
              const isSportsQuestion = item.question.toLowerCase().includes("equipo");
              
              return (
                <div key={idx} className={styles.qaBlock}>
                  <h4 className={styles.question}>
                    <span className={styles.qMarker}>?</span> 
                    <span className={styles.qText}>{item.question}</span>
                    {isSportsQuestion && <span className={styles.sportsBadge}>⚽</span>}
                  </h4>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              );
            })}
          </div>

          {/* Unified Keywords Footer */}
          <div className={styles.keywordsFooter}>
            <span className={styles.keywordsTitle}>EN 3 PALABRAS:</span>
            <div className={styles.keywordsList}>
              {interview.keywords.map((word, idx) => (
                <React.Fragment key={idx}>
                  <span className={styles.keywordItem}>{word}</span>
                  {idx < interview.keywords.length - 1 && (
                    <span className={styles.keywordSeparator}>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <span className={styles.keywordsSmiley}>☺</span>
          </div>
        </div>
      </div>
    </div>
  );
};

