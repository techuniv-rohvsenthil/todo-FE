import React from 'react';
import './NoteCard.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


const NoteCard = (props) => {
  const { text, deleteNote, id } = props;
  const path = `/${id}`;
  return (
    <div className="NoteCard">
      <Link to={path}>
        {text}
      </Link>
      <Button text="DONE" onClick={() => deleteNote(id)} />
    </div>
  );
};

NoteCard.propTypes = {
  text: propTypes.string.isRequired,
  deleteNote: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};

export default NoteCard;
