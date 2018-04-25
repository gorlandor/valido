import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';

import Datetime from 'react-datetime';
import InputMask from 'react-input-mask';

import {
  Valido,
  EmailValidation,
  PasswordValidation,
  PhoneValidation,
  RequiredValidation,
 } from './helpers/Valido';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Phone: '',
      Email: '',
      Password: '',
      DateofBirth: '',
      Dirty: true,
      PasswordDetails: {
        alphanumeric: false,
        containsUpperCase: false,
        minlength: 8,
        maxlength: 10,
      }
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
    } else {
      console.warn('form is invalid');
    }
  }

  isValid({ Phone, Email, Password }) {
    return Valido.IsEmail(Email)
      && Valido.IsPhoneNumber(Phone, 'en-US')
      && Valido.IsPassword(Password);
  }

  render() {

    const {
      Phone,
      Email,
      Password,
      PasswordDetails,
      DateofBirth,
      Dirty,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Valido</h1>
        </header>

        <div className="container">
          <form className='w-100' onSubmit={this.handleSubmit} noValidate>

            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="text-left" htmlFor={'Email'}>
                    Email <span style={{ color: 'red' }}>*</span>
                  </label>

                  <input type="email" id="Email" name="Email" className="form-control" onChange={this.handleUserInput} required />

                  {Dirty && <EmailValidation value={Email} required={true} />}

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <h3 className="text-success">Password Details</h3>

                  <div className="checkbox">
                    <label className="control-label">
                      <input
                        name="PasswordDetails.alphanumeric"
                        type="checkbox"
                        onChange={(event) => {
                          this.setState({
                            PasswordDetails: {
                              ...PasswordDetails,
                              alphanumeric: event.target.checked
                            }
                          })
                        }}
                      />
                      alphanumeric:
                    </label>
                  </div>

                  <div className="checkbox">
                    <label className="control-label">
                      <input
                        name="PasswordDetails.containsUpperCase"
                        type="checkbox"
                        onChange={(event) => {
                          this.setState({
                            PasswordDetails: {
                              ...PasswordDetails,
                              containsUpperCase: event.target.checked
                            }
                          })
                        }}
                       />
                      contains capital letters:
                    </label>
                  </div>

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="text-left" htmlFor={'Password'}>
                    Password <span style={{ color: 'red' }}>*</span>
                    </label>

                  <input type='password' name='Password' className="form-control" onChange={this.handleUserInput} />
                  {Dirty && <PasswordValidation value={Password} alphanumeric={PasswordDetails.alphanumeric} containsUpperCase={PasswordDetails.containsUpperCase} minlength={6} required={true} />}

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="text-left" htmlFor={'Phone'}>
                    Phone with Mask <span style={{ color: 'red' }}>*</span>
                  </label>

                    <InputMask
                      className='form-control'
                      id='Phone'
                      mask='(999)999-9999'
                      maskChar=' '
                      name='Phone'
                      onChange={this.handleUserInput}
                      {...this.props}
                    />

                  {Dirty && <PhoneValidation value={Phone} locale={'en-US'} required={true} />}

                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="text-left" htmlFor={'DateofBirth'}>
                    Date of Birth <span style={{ color: 'red' }}>*</span>
                    </label>
                    <Datetime
                      timeFormat={false}
                      inputProps={{ id: 'DateofBirth',
                          name: 'DateofBirth',
                          className: 'form-control',
                          onBlur: this.handleUserInput }}
                    />

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
