import React, { Component } from 'react';
import './App.css';
import AppBar from "./componets/AppBar"
import Card from "./componets/Card"
import TextFilled from "./componets/TextFilled"

class App extends Component {
  render() {
    return (

      <div className="App">
        <AppBar>
        </AppBar>
        <Card>
        </Card>
      </div>
    );
  }
}

export default App;
