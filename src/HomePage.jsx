import React from 'react';
import propTypes from 'prop-types';
import NoteContainer from './NoteContainer';
import CreateNew from './CreateNew';


import './HomePage.css';

function HomePage(props) {
  const { CreateNewClick } = props;
  return (
    <div className="HomePage">
      <div className="title">
        ALL TODOs
      </div>
      <br />
      <br />
      <NoteContainer />
      <br />
      <CreateNew onClick={CreateNewClick} />
    </div>
  );
}

HomePage.propTypes = {
  CreateNewClick: propTypes.func.isRequired,

};


export default HomePage;
