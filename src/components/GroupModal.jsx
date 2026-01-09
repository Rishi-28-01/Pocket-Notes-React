import { useState } from "react";
import styles from "../styles/GroupModal.module.css";

const COLORS = [
  "#B38BFA",
  "#FF79F2",
  "#43E6FC",
  "#F19576",
  "#0047FF",
  "#6691FF",
];

export default function GroupModal({ onClose, groups, setGroups }) {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const generateInitials = (name) => {
    const words = name.trim().split(" ").filter(Boolean);
    if (words.length === 1) {
      return words[0][0].toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const handleCreate = () => {
    const trimmedName = groupName.trim();

    if (trimmedName.length < 2) return;

    const duplicate = groups.some(
      (g) => g.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (duplicate) return;

    const newGroup = {
      id: Date.now(),
      name: trimmedName,
      color: selectedColor || COLORS[0],
      initials: generateInitials(trimmedName),
    };

    setGroups([...groups, newGroup]);
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Create New group</h3>

        <div className={styles.field}>
          <label>Group Name</label>
          <input
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>

        <div className={styles.colors}>
          <label>Choose colour</label>
          <div className={styles.colorList}>
            {COLORS.map((color) => (
              <span
                key={color}
                className={`${styles.colorDot} ${
                  selectedColor === color ? styles.active : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        <button className={styles.createBtn} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}
