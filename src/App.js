import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    // DON'T DO THIS: this.state.person[0].name = "Maximilian";
    this.setState( {
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 27}
      ]
    } )
  }
  
  render() {
    const style = {
      backgroudColor: 'yellow',
      font: 'inherit',
      border: '1px solid white',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React Appppp</h1>
        <p>Hello!</p>
        <button style={style} onClick={() => this.switchNameHandler('Maximiliannnnn')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'MaxMax!!imilian')} 
          changed={this.nameChangedHandler}>My honbbies: skating</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'hiiii!!! :D'));
  }
}

export default App;
