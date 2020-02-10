import React from 'react';
import HomePage from '../HomePage/HomePage';
import ProfileBar from '../ProfileBar/ProfileBar';
import AddNote from '../AddNote/AddNote';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateNew: false,
    };
  }

CreateNewClick = () => { // camel casing
  this.setState({
    isCreateNew: true,
  });
}

AddTypedNote = () => { // camel casing
  this.setState({
    isCreateNew: false,
  });
}

render() {
  const { isCreateNew } = this.state;
  return (
    <div className="App">
      <ProfileBar />
      { !isCreateNew ? (
        <HomePage CreateNewClick={this.CreateNewClick} />
      )
        : <AddNote AddTypedNote={this.AddTypedNote} /> }
    </div>
  );
}
}

export default App;
