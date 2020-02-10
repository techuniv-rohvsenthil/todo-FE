import React from 'react';
import propTypes from 'prop-types';
import NoteCard from '../NoteCard/NoteCard';
import './NoteContainer.css';

const NoteContainer = (props) => {
  const { noteList, deleteNote } = props;
  const notes = [...noteList].reverse().map((note, i) => (
    <NoteCard key={i} text={note} deleteNote={deleteNote} />
  ));
  return (
    <div className="NoteContainer">
      {notes}
    </div>
  );
};

NoteContainer.propTypes = {
  noteList: propTypes.arrayOf(propTypes.string).isRequired,
  deleteNote: propTypes.func.isRequired,
};

export default NoteContainer;
