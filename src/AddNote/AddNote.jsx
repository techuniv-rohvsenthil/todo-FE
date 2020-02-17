import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import './AddNote.css';

const AddNote = (props) => {
  const { AddTypedNote } = props;

  return (
    <div className="AddNote">
      <textarea id="note-description" maxLength="100" rows="8" />
      Characters left:
      {' '}
      {0}
      /100
      <Link to="/">
        <Button text="ADD NOTE" onClick={AddTypedNote} />
      </Link>
    </div>
  );
};


AddNote.propTypes = {
  AddTypedNote: propTypes.func.isRequired,

};

export default AddNote;
