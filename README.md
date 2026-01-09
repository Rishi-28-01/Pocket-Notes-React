# 📝 Pocket Notes

Pocket Notes is a responsive note-taking web application built using **React** and **Vite**.  
It allows users to create note groups, add notes within groups, and seamlessly switch between desktop and mobile views, all while persisting data using browser storage.

---

## ✨ Features

- 📂 Create multiple **note groups**
- 🔤 Group avatars generated using **initials**
- 🎨 Choose a color for each group
- 📝 Add notes inside a selected group
- ⌨️ Save notes using **Enter key** or **Send button**
- 🕒 Automatically stores **date & time** for each note
- 💾 **Persistent storage** using `localStorage`
- 📱 Fully **responsive** (Desktop & Mobile)
- 🔙 Mobile navigation with back button
- 🎯 UI closely follows the provided design

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **CSS Modules**
- **LocalStorage API**

---

## 📂 Project Structure

src/
├── components/
│ ├── Sidebar.jsx
│ ├── NotesArea.jsx
│ ├── NoteCard.jsx
│ └── GroupModal.jsx
│
├── hooks/
│ └── useLocalStorage.js
│
├── styles/
│ ├── App.module.css
│ ├── Sidebar.module.css
│ ├── NotesArea.module.css
│ └── GroupModal.module.css
│
├── App.jsx
├── main.jsx
└── index.css


---

## 📱 Responsive Behavior

### Desktop
- Sidebar and Notes area displayed side-by-side
- Notes area occupies full remaining width

### Mobile
- Sidebar shown by default
- Selecting a group opens notes in full screen
- Back button allows returning to sidebar
- Floating **“+”** button remains accessible

---

## 💾 Data Persistence

All groups and notes are saved using **browser localStorage**, ensuring:
- Data remains intact on page reload
- Selected group is restored automatically

---

## 🧠 Key Learnings

- Managing responsive layouts using conditional rendering
- Handling state persistence with custom hooks
- Implementing mobile-first navigation without routing
- Using CSS Modules for scoped and maintainable styles




