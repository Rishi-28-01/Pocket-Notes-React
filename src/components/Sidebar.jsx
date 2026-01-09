import { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import GroupModal from "./GroupModal";

export default function Sidebar({
  groups,
  setGroups,
  selectedGroupId,
  setSelectedGroupId,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <aside className={styles.sidebar}>
        <h2 className={styles.title}>Pocket Notes</h2>

        <div className={styles.groupList}>
          {groups.map((group) => (
            <div
              key={group.id}
              className={`${styles.groupItem} ${selectedGroupId === group.id ? styles.active : ""
                }`}
              onClick={() => setSelectedGroupId(group.id)}
            >
              <div
                className={styles.avatar}
                style={{ backgroundColor: group.color }}
              >
                {group.initials}
              </div>
              <span>{group.name}</span>
            </div>
          ))}
        </div>

        <button
          className={styles.addBtn}
          onClick={() => setShowModal(true)}
        >
        </button>
      </aside>

      {showModal && (
        <GroupModal
          onClose={() => setShowModal(false)}
          groups={groups}
          setGroups={setGroups}
        />
      )}
    </>
  );
}
