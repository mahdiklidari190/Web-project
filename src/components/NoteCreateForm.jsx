import React, { useState } from 'react';

function NoteCreateForm({ onSetNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError('عنوان و توضیح نباید خالی باشند');
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onSetNote((prevNotes) => [...prevNotes, newNote]);
    setTitle('');
    setDescription('');
    setError('');
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    if (error && e.target.value.trim() && description.trim()) {
      setError('');
    }
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
    if (error && title.trim() && e.target.value.trim()) {
      setError('');
    }
  };

  return (
    <section className="note-create">
      <h2 className="note-create_title">Add New Note</h2>
      <form className="note-create_form" onSubmit={handleSubmitForm}>
        <input
          value={title}
          onChange={handleChangeTitle}
          type="text"
          placeholder="Note title"
          className="note-create_input"
        />
        <input
          value={description}
          onChange={handleChangeDescription}
          type="text"
          placeholder="Note description"
          className="note-create_input"
        />
        {error && <p className="note-create_error">{error}</p>}
        <button type="submit" className="note-create_button">Add Note</button>
      </form>
    </section>
  );
}

export default NoteCreateForm;