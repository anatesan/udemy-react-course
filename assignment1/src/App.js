import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    name: "Test"
  }

  onNameChangeHandler = (event) => {
    this.setState({
        name: event.target.value   
      }
    );
    console.log(this.state.name);
  }

  render() {
    return (
      <div className="container App">
        <div className="row">
          <div className="col-md-4">
            <UserInput
              changeHandler={this.onNameChangeHandler.bind(this)}/>
          </div>
            <div className="col-md-8">
              <UserOutput
                name="Ashok"
                age="56" />
              <UserOutput
                name="Meera"
                age="51" />
              <UserOutput
                name="Aashrita"
                age="15"> Kid 2 </UserOutput>
              <UserOutput
                name="Shreyas"
                age="23">Kid 1 </UserOutput>
              <UserOutput
                name={this.state.name}
                age="56">Mystery Guy </UserOutput>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
