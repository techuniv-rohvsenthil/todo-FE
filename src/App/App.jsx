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
  const response = await axios.get('http://localhost:8080/notes');
  const noteList = response.data.map((note) => note.description);
  this.setState({
    listOfNotes: [...noteList],
  });
}

CreateNewClick = () => {
  const { listOfNotes } = this.state;
  this.setState({
    listOfNotes: [...listOfNotes],
    isCreateNew: true,
  });
}

AddTypedNote = () => {
  const { listOfNotes } = this.state;
  const noteDetails = document.getElementById('note-description').value;
  this.setState({
    listOfNotes: [...listOfNotes, noteDetails],
    isCreateNew: false,
  });
}

deleteNote = (text) => {
  const { listOfNotes } = this.state;
  const noteList = [...listOfNotes];
  const index = noteList.indexOf(text);
  noteList.splice(index, 1);
  this.setState({
    listOfNotes: [...noteList],
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
          deleteNote={(text) => this.deleteNote(text)}
        />
      )
        : <AddNote AddTypedNote={this.AddTypedNote} /> }
    </div>
  );
}
}

export default App;
