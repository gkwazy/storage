import React, { Component } from 'react';
import './App.css';
import AppBar from "./componets/AppBar"
import Card from "./componets/Card"
import TextFilled from "./componets/TextFilled"
import TextField from "./componets/TextFilled";

class App extends Component {
  state = {
    productNumber: '',
    productName: '',
    cost: '',
    quantity: '',
    supplier: '',
    category: '',
    minQuantity: '',
    location: '',
    description: ''

  }



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
