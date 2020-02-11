import React from 'react';
import './NoteCard.css';
import propTypes from 'prop-types';
import Button from '../Button/Button';


function NoteCard(props) {
  const { text, deleteNote, id } = props;
  return (
    <div className="NoteCard">
      {text}
      <Button text="DONE" onClick={() => deleteNote(id)} />
    </div>
  );
}

NoteCard.propTypes = {
  text: propTypes.string.isRequired,
  deleteNote: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};

export default NoteCard;
