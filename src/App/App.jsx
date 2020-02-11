import React from 'react';
import axios from 'axios';
import HomePage from '../HomePage/HomePage';
import ProfileBar from '../ProfileBar/ProfileBar';
import AddNote from '../AddNote/AddNote';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateNew: false,
      listOfNotes: [],
    };
  }

componentDidMount = async () => {
  const noteList = await axios.get('http://localhost:8080/notes');
  this.setState({
    listOfNotes: [...noteList.data],
  });
}

CreateNewClick = () => {
  const { listOfNotes } = this.state;
  this.setState({
    listOfNotes: [...listOfNotes],
    isCreateNew: true,
  });
}

AddTypedNote = async () => {
  const { listOfNotes } = this.state;
  const noteDetails = document.getElementById('note-description').value;
  const url = 'http://localhost:8080/notes';
  const payload = {
    title: 'New Note',
    description: noteDetails,
  };
  const res = await axios.post(url, payload);
  this.setState({
    listOfNotes: [...listOfNotes, res.data],
    isCreateNew: false,
  });
}

deleteNote = (noteId) => {
  const { listOfNotes } = this.state;
  const noteList = [...listOfNotes];
  const res = noteList.filter((obj) => obj.noteId !== noteId);
  this.setState({
    listOfNotes: [...res],
  });
}

render() {
  const { isCreateNew, listOfNotes } = this.state;
  return (
    <div className="App">
      <ProfileBar />
      { !isCreateNew ? (
        <HomePage
          CreateNewClick={this.CreateNewClick}
          noteList={listOfNotes}
          deleteNote={(noteId) => this.deleteNote(noteId)}
        />
      )
        : <AddNote AddTypedNote={this.AddTypedNote} /> }
    </div>
  );
}
}

export default App;
