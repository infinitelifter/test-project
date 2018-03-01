import React, { Component } from 'react';
import './App.css';
import './styles/style.css'

import ItemList from './components/item_list'
import ItemView from './components/item_view'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemList />
        <ItemView />
        {this.props.children}
      </div>
    );
  }
}

export default App;
