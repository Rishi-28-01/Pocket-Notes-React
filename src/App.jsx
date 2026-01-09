import { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import Sidebar from "./components/Sidebar";
import NotesArea from "./components/NotesArea";
import useLocalStorage from "./hooks/useLocalStorage";
import emptyImage from "./asserts/img.png"

function App() {
  const [groups, setGroups] = useLocalStorage("groups", []);
  const [notes, setNotes] = useLocalStorage("notes", {});
  const [selectedGroupId, setSelectedGroupId] =
    useLocalStorage("selectedGroupId", null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedGroup = groups.find(g => g.id === selectedGroupId);

  const showSidebar = !isMobile || !selectedGroup;
  const showNotes = !isMobile || selectedGroup;

  return (
    <div className={styles.app}>
      {showSidebar && (
        <Sidebar
          groups={groups}
          setGroups={setGroups}
          selectedGroupId={selectedGroupId}
          setSelectedGroupId={setSelectedGroupId}
        />
      )}

      {showNotes && (
        <div className={styles.main}>
          {selectedGroup ? (
            <NotesArea
              group={selectedGroup}
              notes={notes[selectedGroupId] || []}
              setNotes={setNotes}
              isMobile={isMobile}
              onBack={() => setSelectedGroupId(null)}
            />
          ) : (
            !isMobile && (
              <div className={styles.emptyState}>
                <img
                  src={emptyImage}
                  alt="Pocket Notes Illustration"
                  className={styles.illustration}
                />
                <h1>Pocket Notes</h1>
                <p>
                  Send and receive messages without keeping your phone online.
                  <br />
                  Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                </p>
                <span className={styles.encrypted}>
                  🔒 end-to-end encrypted
                </span>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default App;
