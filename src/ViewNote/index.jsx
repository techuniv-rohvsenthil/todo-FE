import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

import './index.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ViewNote(props) {
  const { noteList } = props;
  const query = useQuery();
  const noteId = query.get('noteID');
  const viewTodo = noteList.filter((todo) => todo.noteId === noteId);
  return (
    viewTodo.length !== 0 ? (
      <div className="ViewNote">
        <div className="title">
          View Note
        </div>
        {viewTodo[0].title}
        {', '}
        {viewTodo[0].description}
        {', '}
        {viewTodo[0].noteId}
      </div>
    )
      : (
        <div>
          <Redirect from="*" to="/" />
        </div>
      )
  );
}

ViewNote.propTypes = {
  noteList: propTypes.arrayOf(propTypes.object).isRequired,
};


export default ViewNote;
