import React, { useState } from 'react';
import NoteToolbar from './components/NoteToolbar';
import NoteWorkspace from './components/NoteWorkspace';

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState('latest');

  const sortedNotes = [...notes].sort((a, b) => {
    if (sortBy === 'earliest') return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortBy === 'completed') return Number(b.completed) - Number(a.completed);
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <>
      <NoteToolbar notes={sortedNotes} sortBy={sortBy} onSetSortBy={(e) => setSortBy(e.target.value)} />
      <NoteWorkspace notes={sortedNotes} onSetNote={setNotes} />
    </>
  );
}

export default App;