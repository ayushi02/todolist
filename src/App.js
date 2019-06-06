import React, { Component } from 'react';
import './App.css';
import {ModalContainer} from './modal/ModalContainer.js';
import {openModal} from './modal/ModalAction.js';

export class App extends Component {
  render() {
    return (
    <div>
    <button onClick = {() => this.props.openModal({id:2, name:'list2'})}>
      click me
    </button>
    <ModalContainer/>
    </div>
  );
    }
}

export default App;
