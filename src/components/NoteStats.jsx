import React from 'react';

function NoteStats({ notes }) {
  const completed = notes.filter((n) => n.completed).length;
  const open = notes.length - completed;

  return (
    <ul className="note-stats">
      <li>All <span>{notes.length}</span></li>
      <li>Completed <span>{completed}</span></li>
      <li>Open <span>{open}</span></li>
    </ul>
  );
}

export default NoteStats;