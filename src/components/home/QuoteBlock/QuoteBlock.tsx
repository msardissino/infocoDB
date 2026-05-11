import React from "react";
import styles from "./QuoteBlock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export const QuoteBlock = () => {
  return (
    <div className={styles.quoteWrapper}>
      <blockquote className={styles.quote}>
        <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />
        INFOCO EMPIEZA A CONSTRUIRSE EN ESTE MOMENTO, DESDE ADENTRO, ENTRE TODXS LXS QUE HACEMOS INTRES.
        <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteIcon} />
      </blockquote>
    </div>
  );
};
