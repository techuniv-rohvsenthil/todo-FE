import React from 'react';
import propTypes from 'prop-types';
import NoteContainer from '../NoteContainer/NoteContainer';
import Button from '../Button/Button';


import './HomePage.css';

const HomePage = (props) => {
  const { CreateNewClick, noteList, deleteNote } = props;
  return (
    <div className="HomePage">
      <div className="title">
        ALL TODOs
      </div>
      <NoteContainer noteList={noteList} deleteNote={(noteId) => deleteNote(noteId)} />
      <Button text="CREATE NEW" onClick={CreateNewClick} />
    </div>
  );
};

HomePage.propTypes = {
  CreateNewClick: propTypes.func.isRequired,
  noteList: propTypes.arrayOf(propTypes.object).isRequired,
  deleteNote: propTypes.func.isRequired,
};


export default HomePage;
