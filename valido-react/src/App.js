import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { EmailValidation, PasswordValidation } from './helpers/Valido';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Phone: '',
      Email: '',
      Password: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });

  }


  render() {


    const { Email, Password } = this.state;


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Valido</h1>
        </header>
        


        <div className="container">
          <form>
          

            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="text-left">
                    Email*
                    <input type="email" name="Email" className="form-control" onChange={this.handleUserInput} required />
                  </label>

                  <EmailValidation value={Email} required={true} />

                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="text-left">
                    Password*
                    <input type='password' name='Password' className="form-control" onChange={this.handleUserInput} />
                  </label>

                  <PasswordValidation value={Password} alphanumeric={true} minlength={6} required={true} />

                </div>
              </div>
            </div>


            <button className="btn btn-primary" disabled={true}>Submit</button>


          </form>
        </div>



      </div>
    );
  }
}

export default App;
