import React from 'react';
import InputMask from "react-input-mask";
const Valido = require('../../lib/Valido.util');

export default function RegisterForm(props = {}) {
    function handleChange(event) {

        const { name, value, type } = event.target;
        let errors = [];

        const textInputProps = {
            ...props[name], // always goes first
            value,
            dirty: true,
            formSubmitted: props.formSubmitted
        };
                    
        const {errors: properLengthErrors} = Valido.validateProperLength(textInputProps);
        const {errors: requiredErrors} = Valido.validateRequired(textInputProps);        

        if (type === 'email') {
            const {errors: emailErrors} = Valido.validateEmail(value, name, props);
            errors = errors.concat(emailErrors);
        }

        if (type === 'password') {
            const {errors: passwordErrors} = Valido.validatePassword(value, name, props);
            errors = errors.concat(passwordErrors);
        }

        props.onInputChange({
            ...props,
            [name]: {
                ...props[name],
                value: value,
                errors: errors.concat(properLengthErrors, requiredErrors),
            },
        });
    }    

    return (
        <div className="container">
            <form noValidate onSubmit={props.onSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h2>Example Form</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="name" className="col-form-label">
                                        Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        autoComplete="name"
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={props.name.value}
                                        minLength={props.name.minLength}
                                        maxLength={props.name.maxLength}
                                        required={props.name.required}
                                        placeholder={'e.g. Jon Doe'}
                                    />
                                    {props.name.errors.length > 0 &&
                                        props.name.errors.map((error, i) => (
                                            <p className="text-danger" key={i}>
                                                {error}
                                            </p>
                                        ))}
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="email" className="col-form-label">
                                        Email Address <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        autoComplete="email"
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={props.email.value}
                                        maxLength={props.email.maxLength}
                                        required={props.email.required}
                                        placeholder={'e.g. example@email.com'}
                                    />
                                    {props.email.errors.length > 0 &&
                                        props.email.errors.map((error, i) => (
                                            <p className="text-danger" key={i}>
                                                {error}
                                            </p>
                                        ))}
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">                                
                                    <label htmlFor="dateOfBirth" className="col-form-label">
                                        Date Of Birth <span className="text-danger">*</span>
                                    </label>
                                    <InputMask   
                                        autoComplete="off"
                                        inputMode="numeric"
                                        type="tel"
                                        name="dateOfBirth"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={props.dateOfBirth.value}
                                        minLength={props.dateOfBirth.minLength}                                        
                                        required={props.dateOfBirth.required}
                                        placeholder={'MM/DD/YYYY'}
                                        mask="99/99/9999"
                                        maskChar={null} 
                                    />
                                    {props.dateOfBirth.errors.length > 0 &&
                                        props.dateOfBirth.errors.map((error, i) => (
                                            <p className="text-danger" key={i}>
                                                {error}
                                            </p>
                                        ))}
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="password" className="col-form-label">
                                        Password <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        autoComplete="current-password"
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={props.password.value}
                                        minLength={props.password.minLength}
                                        maxLength={props.password.maxLength}
                                        required={props.password.required}
                                        placeholder={'********'}
                                    />
                                    {props.password.errors.length > 0 &&
                                        props.password.errors.map((error, i) => (
                                            <p className="text-danger" key={i}>
                                                {error}
                                            </p>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
