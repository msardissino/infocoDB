import React from "react";
import { StudentMessage } from "@/types/group";
import { PostItNote } from "@/ui/PostItNote/PostItNote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./StudentMessages.module.css";

interface StudentMessagesProps {
  messages: StudentMessage[];
}

export const StudentMessages: React.FC<StudentMessagesProps> = ({ messages }) => {
  return (
    <div className={styles.container}>
      <div className={styles.boardHeader}>
        <h3 className={styles.title}>¿QUÉ LE QUIEREN DECIR LOS PIBES AL TUTOR?</h3>
        <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} />
      </div>

      <div className={styles.boardBody}>
        {messages.map((msg, idx) => {
          // Alternating colors and rotations for realism
          const rotations = [-2, 3, -1, 2];
          const rotation = rotations[idx % rotations.length];
          const colors: Array<"yellow" | "pink" | "green" | "blue"> = ["pink", "blue", "green", "yellow"];
          const color = msg.color || colors[idx % colors.length];

          return (
            <div key={idx} className={styles.noteWrapper}>
              <PostItNote 
                color={color} 
                rotation={rotation}
                className={styles.boardPostIt}
              >
                <p className={styles.messageText}>&quot;{msg.text}&quot;</p>
                <span className={styles.author}>— {msg.author}</span>
              </PostItNote>
            </div>
          );
        })}
      </div>
    </div>
  );
};
