import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';
import NameForm from './NameForm.js';
import ItemsSearch from './ItemsSearch.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        termFirstName: 'Firstname',
        termLastName: 'LASTNAME',
        termJobName: 'Job Name',
        termCompanyName: 'Company Name',
        items: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <body id="container">
          <NameForm />
          <ItemsSearch />
          <div className="Liste" >
            <h2> List of participants : </h2>
            <List items={this.state.items} />
          </div>
          
        </body>
      </div>
    );
  }
}

//React.render(<App Items={items} />, document.getElementById('container'));
export default App;

