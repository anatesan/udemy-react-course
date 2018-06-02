import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {
  state = {
    inputText: "",
    inputTextLength: 0,
    modifiableTextArray: []
  }

  inputTextChangeHandler = (event) => {
    this.setState({
      inputText: event.target.value,
      inputTextLength: event.target.value.length,
      modifiableTextArray: event.target.value.split('') // initialize from what was input
    });

    // console.log(this.state.inputTextLength);
  }

  deleteCharHandler = (index) => {

    let postDeleteCharTextArray = [...this.state.modifiableTextArray];
    postDeleteCharTextArray.splice(index, 1);

    this.setState({
      modifiableTextArray: postDeleteCharTextArray
    })
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Input Text: </span>
                  </div>
                  <input type="text" className="form-control"
                    placeholder="Type in your text here"
                    aria-label="Input Text"
                    aria-describedby="basic-addon1"
                    onChange={this.inputTextChangeHandler} />
                </div>
              </div>
              <div className="row">
                 <ValidationComponent 
                    inputText={this.state.inputText}
                    inputTextLength={this.state.inputTextLength} 
                    modifiableTextArray={this.state.modifiableTextArray}/>
              </div>
            </div>
          </div>

          <div className="col">
            <CharComponent 
              modifiableTextArray={this.state.modifiableTextArray}
              deleteCharHandler={this.deleteCharHandler}/>
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
