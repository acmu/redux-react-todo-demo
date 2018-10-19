import React, { Component } from 'react';
import './App.css';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      if(this.textInput) this.textInput.focus();
    }
  }

  componentDidMount() {
    this.focusTextInput();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef} />
        
        <input
          type="button"
          value="focus the text input"
          onClick={this.focusTextInput} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyComponent />
    );
  }
}

export default App;
