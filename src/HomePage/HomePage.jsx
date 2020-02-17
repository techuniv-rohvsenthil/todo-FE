import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoteContainer from '../NoteContainer/NoteContainer';
import Button from '../Button/Button';


import './HomePage.css';

const HomePage = (props) => {
  const { noteList, deleteNote } = props;
  return (
    <div className="HomePage">
      <div className="title">
        ALL TODOs
      </div>
      <NoteContainer noteList={noteList} deleteNote={(noteId) => deleteNote(noteId)} />
      <Link to="/new">
        <Button text="CREATE NEW" />
      </Link>
    </div>
  );
};

HomePage.propTypes = {
  noteList: propTypes.arrayOf(propTypes.object).isRequired,
  deleteNote: propTypes.func.isRequired,
};


export default HomePage;
