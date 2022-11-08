import './App.css';
import React from 'react';
import Greet from './components/Greet';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Greet />
      </div>
    );
  }
}

export default App;
