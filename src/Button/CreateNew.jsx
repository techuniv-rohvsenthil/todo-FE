import React from 'react';
import './CreateNew.css';
import propTypes from 'prop-types';


const CreateNew = (props) => {
  const { onClick } = props;
  return (
    <div>
      <button className="CreateNew" type="button" onClick={onClick}>
        CREATE NEW
      </button>
    </div>
  );
};

CreateNew.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default CreateNew;
