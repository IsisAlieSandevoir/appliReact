/**
 * Commentaire test 
 * @author : Isis Alié-Sandevoir
 */


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class ItemsSearch extends Component {
    constructor() {
      super();
      this.state = {
        search: 'Métier'
      };
    }
  
    updateSearch(event) {
      this.setState({
        search : event.target.value.substr(0, 20)
      });
    }
  
    render() {
      let filteredItems = this.props.List.filter(
        (List) => {
          return List.termJobName.includes(this.state.search());
        }
      );
  
      return (
        <div>
          <input className="ListItemsFinal" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
          <hr />
          <ul>
          {filteredItems.map((List) => {
            return <List List={List} />
          })}
          </ul>
          </div>
      )
    }
  }
 
  export default ItemsSearch;