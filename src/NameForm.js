import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class NameForm extends Component {
  constructor(props) {
    super(props);
    console.log("coucou");
    this.state = {
        termFirstName: 'Firstname',
        termLastName: 'LASTNAME',
        termJobName: 'Job Name',
        termCompanyName: 'Company Name',
        items: [],
        search: 'Metier'
    };
  }

  onChangeFirstName = (event) => {
    this.setState({
      termFirstName: event.target.value
    });
  }

  onChangeJobName = (event) => {
    this.setState({
      termJobName: event.target.value
    });
  }

  onChangeCompanyName = (event) => {
    this.setState({
      termCompanyName: event.target.value
    });
  }

  onChangeLastName = (event) => {
    this.setState({
      termLastName: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      termFirstName: '',
      termLastName: '',
      termJobName: '',
      termCompanyName: '',
      items: [...this.state.items, 
        this.state.termFirstName 
        +' '+ this.state.termLastName 
        +' '+ this.state.termJobName 
        +' '+ this.state.termCompanyName]
    });
  }

  render() {
    
    return (
          <form className = "NameForm" onSubmit={this.onSubmit}>
            <label>First Name:
             <br/><input type="text" value={this.state.termFirstName} onChange={this.onChangeFirstName} /><br/>
            </label>
            <label>Last Name:
              <br/><input type="text" value={this.state.termLastName} onChange={this.onChangeLastName} /><br/>
            </label>
            <label>Job :
              <br/><input type="text" value={this.state.termJobName} onChange={this.onChangeJobName} /><br/>
            </label>
            <label>Company :
              <br/><input type="text" value={this.state.termCompanyName} onChange={this.onChangeCompanyName} /><br/>
            </label>
            <button> Submit </button>
          </form>
    );
  }
}

export default NameForm;