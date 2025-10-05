import React from 'react';
import NoteCreateForm from './NoteCreateForm';
import NoteCollection from './NoteCollection';

function NoteWorkspace({ notes, onSetNote }) {
  return (
    <div className="note-workspace">
      <NoteCreateForm onSetNote={onSetNote} />
      <NoteCollection notes={notes} onSetNote={onSetNote} />
    </div>
  );
}

export default NoteWorkspace;