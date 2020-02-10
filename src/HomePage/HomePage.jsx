import React from 'react';
import propTypes from 'prop-types';
import NoteContainer from '../NoteContainer/NoteContainer';
import CreateNew from '../Button/CreateNew';


import './HomePage.css';

function HomePage(props) { // arrow function, remove br, name of button functionality
  const { CreateNewClick, noteList } = props;
  return (
    <div className="HomePage">
      <div className="title">
        ALL TODOs
      </div>
      <br />
      <br />
      <NoteContainer noteList={noteList} />
      <br />
      <CreateNew onClick={CreateNewClick} />
    </div>
  );
}

HomePage.propTypes = {
  CreateNewClick: propTypes.func.isRequired,
  noteList: propTypes.node.isRequired,
};


export default HomePage;
