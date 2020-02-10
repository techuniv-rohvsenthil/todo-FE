import React from 'react';
import './NoteCard.css';
import propTypes from 'prop-types';


function NoteCard(props) {
  const { text } = props;
  return (
    <div className="NoteCard">
      {text}
    </div>
  );
}

NoteCard.propTypes = {
  text: propTypes.string.isRequired,
};

export default NoteCard;
