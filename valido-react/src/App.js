import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import InputMask from "react-input-mask";
import "./App.css";
import { DateValidation, EmailValidation, LengthValidation, PasswordValidation, PhoneValidation, Valido } from "./lib/Valido";
import logo from "./logo.svg";




class App extends Component {
  state = {
    Username: "",
    Phone: "",
    Email: "",
    Password: "",
    DateofBirth: "",
    Dirty: false,
    PasswordDetails: {
      alphanumeric: false,
      containsUpperCase: false,
      minlength: 8,
      maxlength: 10
    }
  }

  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      state: this.state
    })
    this.setState({ Dirty: true }, () => {
      if (this.isValid(this.state)) {
        alert("yeah, buddy");
      } else {
        console.warn("form is invalid");
      }
    });
  }

  isValid = ({ Username, Phone, Email, Password, DateofBirth }) => {
    return (
      Valido.HasProperLength(Username) &&
      Valido.IsEmail(Email) &&
      Valido.IsPhoneNumber(Phone, "en-US") &&
      Valido.IsPassword(Password, false, false, 6, 15) &&
      !Valido.IsEmpty(DateofBirth)
    );
  }

  render() {
    const {
      Username,
      Phone,
      Email,
      Password,
      PasswordDetails,
      DateofBirth,
      Dirty
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Valido</h1>
        </header>

        <div className="container d-flex justify-content-center" style={{ maxWidth: "768px" }}>
          <form className="w-100" onSubmit={this.handleSubmit} noValidate>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label className="text-left" htmlFor={"Username"}>
                    Username <span style={{ color: "red" }}>*</span>
                  </label>

                  <input
                    type="text"
                    autoComplete="username"
                    className="form-control"
                    id="Username"
                    name="Username"
                    onChange={this.handleUserInput}
                    required
                    value={this.state.Username}
                  />

                  {Dirty && (
                    <LengthValidation
                      value={Username}
                      fieldName="Username"
                      minlength={6}
                      maxlength={32}
                      locale={"es-PR"}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label className="text-left" htmlFor={"Email"}>
                    Email <span style={{ color: "red" }}>*</span>
                  </label>

                  <input
                    type="email"
                    autoComplete="email"
                    className="form-control"
                    id="Email"
                    name="Email"
                    onChange={this.handleUserInput}
                    required
                    value={this.state.Email}
                  />

                  {Dirty && (
                    <EmailValidation
                      value={Email}
                      required={true}
                      locale={"es-PR"}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <h4 className="text-success">Password Details</h4>

                  <div className="checkbox">
                    <label className="control-label">
                      <input
                        name="PasswordDetails.alphanumeric"
                        type="checkbox"
                        onChange={event => {
                          this.setState({
                            PasswordDetails: {
                              ...PasswordDetails,
                              alphanumeric: event.target.checked
                            }
                          });
                        }}
                        checked={this.state.PasswordDetails.alphanumeric}
                      />
                      alphanumeric:
                    </label>
                  </div>

                  <div className="checkbox">
                    <label className="control-label">
                      <input
                        name="PasswordDetails.containsUpperCase"
                        type="checkbox"
                        onChange={event => {
                          this.setState({
                            PasswordDetails: {
                              ...PasswordDetails,
                              containsUpperCase: event.target.checked
                            }
                          });
                        }}
                        checked={this.state.PasswordDetails.containsUpperCase}
                      />
                      contains capital letters:
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label className="text-left" htmlFor={"Password"}>
                    Password <span style={{ color: "red" }}>*</span>
                  </label>

                  <input
                    type="password"
                    autoComplete="current-password"
                    className="form-control"
                    id="Password"
                    name="Password"
                    onChange={this.handleUserInput}
                    value={this.state.Password}
                  />

                  {Dirty && (
                    <PasswordValidation
                      value={Password}
                      alphanumeric={PasswordDetails.alphanumeric}
                      containsUpperCase={PasswordDetails.containsUpperCase}
                      minlength={6}
                      required={true}
                      locale={"es-PR"}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label className="text-left" htmlFor={"Phone"}>
                    Phone with Mask <span style={{ color: "red" }}>*</span>
                  </label>

                  <InputMask
                    autoComplete="tel tel-national"
                    className="form-control"
                    id="Phone"
                    mask="(999)999-9999"
                    maskChar=" "
                    name="Phone"
                    onChange={this.handleUserInput}
                    {...this.props}
                    value={this.state.Phone}
                  />

                  {Dirty && (
                    <PhoneValidation
                      value={Phone}
                      locale={"es-PR"}
                      required={true}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label className="text-left" htmlFor={"DateofBirth"}>
                    Date of Birth <span style={{ color: "red" }}>*</span>
                  </label>
                  <InputMask                    
                    className="form-control"
                    id="DateofBirth"
                    mask="99/99/9999"
                    maskChar="_"
                    name="DateofBirth"
                    onChange={this.handleUserInput}
                    {...this.props}
                    value={this.state.DateofBirth}
                  />

                  {Dirty && (
                    <DateValidation
                      value={DateofBirth}
                      fieldName={"fecha de nacimiento"}
                      locale={"es-PR"}
                      required={true}
                      showValue={false}
                    />
                  )}
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
