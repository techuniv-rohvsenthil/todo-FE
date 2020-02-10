import React from 'react';
import propTypes from 'prop-types';
import NoteCard from '../NoteCard/NoteCard';
import './NoteContainer.css';

function NoteContainer(props) {
  const { noteList } = props;
  const notes = noteList.map((note) => (
    <NoteCard text={note} />
  ));
  return (
    <div className="NoteContainer">
      {notes}
    </div>
  );
}

NoteContainer.propTypes = {
  noteList: propTypes.node.isRequired,
};

export default NoteContainer;
