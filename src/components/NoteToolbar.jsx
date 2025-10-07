import React from 'react';

function NoteToolbar({ notes, sortBy, onSetSortBy }) {
  return (
    <header className="note-toolbar">
      <h1 className="note-toolbar_title">My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSetSortBy} className="note-toolbar_sort">
        <option value="latest">Latest</option>
        <option value="earliest">Earliest</option>
        <option value="completed">Completed</option>
      </select>
    </header>
  );
}

export default NoteToolbar;