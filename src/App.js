import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props);

    //Static Char Data

    this.state = {

      sheet : {
        data : {
          attributes : [
            {
              name : 'Strenght',
              maxLvl : 5,
              currentLvl : 2
            },
            {
              name : 'Speed',
              maxLvl : 5,
              currentLvl : 4
            }
          ]
        }

      }

    }
  }

  render() {

    let attrsListGrouppItems = this.state.sheet.data.attributes.map(attribute => 
                            <ListGroupItem>{attribute.name} {attribute.currentLvl}</ListGroupItem>
                          );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          this is my CharacterList
        </p>

        <ListGroup>
          {attrsListGrouppItems}
        </ListGroup>


      </div>
    );
  }
}

export default App;
