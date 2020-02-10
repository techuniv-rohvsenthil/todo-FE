import React from 'react';
import NoteCard from '../NoteCard/NoteCard';
import './NoteContainer.css';

function NoteContainer() {
  return (
    <div className="NoteContainer">
      <NoteCard />
      <br />
      <NoteCard />
      <br />
      <NoteCard />
      <br />
      <NoteCard />
    </div>
  );
}

export default NoteContainer;
