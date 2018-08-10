import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ListGroup, ListGroupItem, Button, FormGroup, FormControl} from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props);

    this.createAttrListGroupItem = this.createAttrListGroupItem.bind(this);
    this.doCreateAttribute = this.doCreateAttribute.bind(this);
    this.createAttribute = this.createAttribute.bind(this);
    this.buildEditAttrForm = this.buildEditAttrForm.bind(this);
    this.handleChangeAttributeName = this.handleChangeAttributeName.bind(this);
    this.handleChangeAttributeLvl = this.handleChangeAttributeLvl.bind(this);
    //Static Char Data

    this.state = {

      sheet : {
        data : {
          attributes : [
            {
              key: 'attr1',
              name : 'Strenght',
              maxLvl : 5,
              currentLvl : 2
            },
            {
              key: 'attr2',
              name : 'Speed',
              maxLvl : 5,
              currentLvl : 4
            }
          ]
        }

      }

    }
  }

  createAttrListGroupItem(attribute){
    return <ListGroupItem key={attribute.key}>{attribute.name} {attribute.currentLvl}</ListGroupItem>;
  }
  
  doCreateAttribute(){
    this.setState({
      creatingAttribute : true,
      currentAttribute: {key: 'attr' + this.state.sheet.data.attributes.length + 1, name: 'new Attribute', maxLvl: 5, currentLvl: 0}
    });
  }

  createAttribute(){
    
    let sheet = this.state.sheet;
    sheet.data.attributes.push(this.state.currentAttribute);
    
    this.setState({
      sheet : sheet,
      creatingAttribute: false,
      currentAttribute: null
    });
  }  

  handleChangeAttributeName(e){
    
    let currentAttribute = this.state.currentAttribute;
    currentAttribute.name = e.target.value;

    this.setState({
        currentAttribute : currentAttribute
    });
  }

  handleChangeAttributeLvl(e){
    
    let currentAttribute = this.state.currentAttribute;
    currentAttribute.currentLvl = e.target.value;

    this.setState({
        currentAttribute : currentAttribute
    });
  }

  buildEditAttrForm(){

    return (
      <form>
        <FormGroup controlId="editAttribute" bsSize="sm">
          <FormControl
            type="text"
            value={this.state.currentAttribute.name}
            onChange={this.handleChangeAttributeName}
          />
          <FormControl
          
            type="text"
            value={this.state.currentAttribute.currentLvl}
            onChange={this.handleChangeAttributeLvl}
          />
        </FormGroup>
        <Button bsstyle="primary" onClick={this.createAttribute}>
          Save
        </Button>
      </form>
    );

  }

  render() {

    let attrsListGrouppItems = this.state.sheet.data.attributes.map(attribute => this.createAttrListGroupItem(attribute));

    let editAttrForm = null;
    
    if(this.state.creatingAttribute){
      editAttrForm = this.buildEditAttrForm();
    }
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is my Character Attribute List
        </p>

        <Button bsstyle="primary" onClick={this.doCreateAttribute}>New Skill</Button>

        {editAttrForm}

        <ListGroup>
          {attrsListGrouppItems}
        </ListGroup>


      </div>
    );
  }
}

export default App;
