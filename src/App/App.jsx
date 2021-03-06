import dotenv from 'dotenv';
import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ProfileBar from '../ProfileBar/ProfileBar';
import AddNote from '../AddNote/AddNote';
import './App.css';
import useInput from '../hooks/useInput';
import ViewNote from '../ViewNote';
dotenv.config();

const App = () => {
  const [todo, setTodo, listLoadComplete] = useInput([]);

  const AddTypedNote = async () => {
    const listOfNotes = todo;
    const noteDetails = document.getElementById('note-description').value;
    const url = `${process.env.REACT_APP_URL}/notes`;
    const payload = {
      title: 'New Note',
      description: noteDetails,
    };
    const res = await axios.post(url, payload);
    setTodo(
      [...listOfNotes, res.data],
    );
  };

  const deleteNote = async (noteId) => {
    const listOfNotes = todo;
    const noteList = [...listOfNotes];
    await axios({
      method: 'DELETE',
      url: `${process.env.REACT_APP_URL}/notes/${noteId}`,
    });
    const res = noteList.filter((obj) => obj.noteId !== noteId);
    setTodo([...res]);
  };

  const listOfNotes = todo;
  return (
    <div className="App">
      <ProfileBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage
              noteList={listOfNotes}
              deleteNote={(noteId) => deleteNote(noteId)}
            />
          </Route>
          <Route exact path="/new">
            <AddNote AddTypedNote={AddTypedNote} />
          </Route>
          <Route exact path="/view">
            <ViewNote
              noteList={listOfNotes}
              listLoadComplete={listLoadComplete}
            />
          </Route>
          <Route exact path="*">
            <Redirect from="*" to="/" />
            <Route path="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
