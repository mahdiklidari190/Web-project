import React from 'react';
import NoteStats from './NoteStats';

function NoteItem({ note, onDelete, onToggle }) {
  const date = new Date(note.createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <div>
        <button onClick={() => onDelete(note.id)}>❌</button>
        <input type="checkbox" checked={note.completed} onChange={() => onToggle(note.id)} />
      </div>
      <small>{date}</small>
    </div>
  );
}

function NoteCollection({ notes, onSetNote }) {
  const handleDelete = (id) => {
    onSetNote(notes.filter((n) => n.id !== id));
  };

  const handleToggle = (id) => {
    onSetNote(notes.map((n) => n.id === id ? { ...n, completed: !n.completed } : n));
  };

  return (
    <section className="note-collection">
      <NoteStats notes={notes} />
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={handleDelete} onToggle={handleToggle} />
      ))}
    </section>
  );
}

export default NoteCollection;