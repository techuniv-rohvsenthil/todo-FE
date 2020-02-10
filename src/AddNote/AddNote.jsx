import React from 'react';
import propTypes from 'prop-types';
import CreateNew from '../Button/CreateNew';

import './AddNote.css';

function AddNote(props) { // change to arrow function, remove br tag
  const { AddTypedNote } = props;
  return (
    <div className="AddNote">
      <textarea id="note-description" maxLength="100" rows="8" />
      Characters left: 0/100
      <br />
      {' '}
      <br />
      <CreateNew onClick={AddTypedNote} />
    </div>
  );
}

AddNote.propTypes = {
  AddTypedNote: propTypes.func.isRequired,

};

export default AddNote;
