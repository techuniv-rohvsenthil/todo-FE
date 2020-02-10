import React from 'react';
import NoteContainer from './NoteContainer';
import CreateNew from './CreateNew';

import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <div className="title">
        All TODOs
      </div>
      <br />
      <br />
      <NoteContainer />
      <br />
      <CreateNew />
    </div>
  );
}

export default HomePage;
