import styles from "../styles/NoteCard.module.css";

export default function NoteCard({ note }) {
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })} • ${d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  return (
    <div className={styles.card}>
      <p>{note.text}</p>
      <span className={styles.time}>{formatDate(note.updatedAt)}</span>
    </div>
  );
}
