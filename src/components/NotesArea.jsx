import { useState } from "react";
import styles from "../styles/NotesArea.module.css";
import NoteCard from "./NoteCard";

export default function NotesArea({
  group,
  notes,
  setNotes,
  isMobile, 
  onBack,
}) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    const newNote = {
      id: Date.now(),
      text: text.trim(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setNotes((prev) => ({
      ...prev,
      [group.id]: [...(prev[group.id] || []), newNote],
    }));

    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        {isMobile && (
          <button className={styles.backBtn} onClick={onBack}>
            ←
          </button>
        )}
        <div
          className={styles.avatar}
          style={{ backgroundColor: group.color }}
        >
          {group.initials}
        </div>
        <span>{group.name}</span>
      </header>

      <div className={styles.notes}>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>

      <div className={styles.inputBox}>
        <textarea
          placeholder="Enter your text here........"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className={text.trim() ? styles.sendActive : styles.sendDisabled}
          onClick={handleSend}
        >
          ➤
        </button>
      </div>
    </div>
  );
}
