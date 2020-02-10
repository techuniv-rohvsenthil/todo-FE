import React from 'react';
import HomePage from './HomePage';
import ProfileBar from './ProfileBar';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isCreateNew: false,
    };
  }

  // CreateNewClick = () => {
  //   this.setState({
  //     isCreateNew: true,
  //   });
  // }

  render() {
    // const { isCreateNew } = this.state;
    return (
      <div className="App">
        <ProfileBar />
        <br />
        <HomePage />
      </div>
    );
  }
}

export default App;
