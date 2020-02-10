import React from 'react';
import propTypes from 'prop-types';
import CreateNew from '../Button/CreateNew';

import './AddNote.css';

const AddNote = (props) => {
  const { AddTypedNote } = props;
  return (
    <div className="AddNote">
      <textarea id="note-description" maxLength="100" rows="8" />
      Characters left: 0/100
      <CreateNew onClick={AddTypedNote} />
    </div>
  );
};

AddNote.propTypes = {
  AddTypedNote: propTypes.func.isRequired,

};

export default AddNote;
