import React from 'react';
import './CreateNew.css';
import propTypes from 'prop-types';


function CreateNew(props) {
  const { CreateNewClick } = props;
  return (
    <div>
      <button className="CreateNew" type="button" onClick={CreateNewClick}>
        CREATE NEW
      </button>
    </div>
  );
}

CreateNew.propTypes = {
  CreateNewClick: propTypes.func.isRequired,
};

export default CreateNew;
