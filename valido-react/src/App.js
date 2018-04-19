import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';

import Datetime from 'react-datetime';

import { Valido, EmailValidation, PasswordValidation, PhoneValidation, RequiredValidation } from './helpers/Valido';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Phone: '',
      Email: '',
      Password: '',
      DateofBirth: '',
      Dirty: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleUserInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });

  }

  handleSubmit(event) {

    event.preventDefault();

    this.setState({ Dirty: true });

    if (this.isValid(this.state)) {
      alert('yeah, buddy');
    }
    else {
      console.warn('form is invalid');
    }

  }

  isValid({ Phone, Email, Password }) {
    return Valido.IsEmail(Email)
      && Valido.IsPhoneNumber(Phone, 'en-US')
      && Valido.IsPassword(Password);
  }

  render() {


    const { Phone, Email, Password, DateofBirth, Dirty } = this.state;


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Valido</h1>
        </header>



        <div className="container">
          <form onSubmit={this.handleSubmit} noValidate>


            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="text-left">
                    Email <span style={{ color: 'red' }}>*</span>
                    <input type="email" name="Email" className="form-control" onChange={this.handleUserInput} required />
                  </label>

                  {Dirty && <EmailValidation value={Email} required={true} />}

                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="text-left">
                    Password <span style={{ color: 'red' }}>*</span>
                    <input type='password' name='Password' className="form-control" onChange={this.handleUserInput} />
                  </label>

                  {Dirty && <PasswordValidation value={Password} alphanumeric={true} minlength={6} required={true} />}

                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="text-left">
                    Phone <span style={{ color: 'red' }}>*</span>
                    <input type='text' name='Phone' className="form-control" onChange={this.handleUserInput} />
                  </label>

                  {Dirty && <PhoneValidation value={Phone} locale={'en-US'} required={true} />}

                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="text-left">
                    Date of Birth <span style={{ color: 'red' }}>*</span>
                    <Datetime
                      timeFormat={false}
                      inputProps={{ name: 'DateofBirth', className: 'form-control', onBlur: this.handleUserInput }}
                    />
                  </label>

                  {Dirty && <RequiredValidation value={DateofBirth} fieldName={'Date of Birth'} />}

                </div>
              </div>
            </div>


            <button className="btn btn-primary">Submit</button>


          </form>
        </div>



      </div>
    );
  }
}

export default App;
