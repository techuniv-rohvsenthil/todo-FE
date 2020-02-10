import React from 'react';
import './NoteCard.css';
import propTypes from 'prop-types';
import Button from '../Button/Button';


function NoteCard(props) {
  const { text, deleteNote } = props;
  return (
    <div className="NoteCard">
      {text}
      <Button text="DONE" onClick={deleteNote} />
    </div>
  );
}

NoteCard.propTypes = {
  text: propTypes.string.isRequired,
  deleteNote: propTypes.func.isRequired,
};

export default NoteCard;
