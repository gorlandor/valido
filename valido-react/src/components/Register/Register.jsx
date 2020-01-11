import React, { Fragment, useState } from "react";
import RegisterForm from "./RegisterForm";
import RegisterConfirmation from "./RegisterConfirmation";
const Valido = require('../../lib/Valido.util');

const defaultName = {
    value: "", fieldName: "name", required: true, minLength: 2, maxLength: 50, errors: []
};

const defaultEmailAddress = {
    value: "", fieldName: "email address", required: true, maxLength: 50, errors: []
};

const defaultPassword = {
    value: "", fieldName: "password", required: true, alphanumeric: true, containsUpperCase: true, containsSpecialChar: true, minLength: 8, maxLength: 15, errors: []
};

const defaultDateOfBirth = {
    value: "", fieldName: "date of birth", required: true, minLength: 10, maxLength: 10, errors: []
};

const RegisterStatus = {
    idle: "idle",
    completed: "completed",
    failed: "failed"
}

export default function Register() {

    const [status, setStatus] = useState(RegisterStatus.idle);
    const [values, setValues] = useState({
        name: defaultName,
        email: defaultEmailAddress,
        password: defaultPassword,
        dateOfBirth: defaultDateOfBirth
    });

    

    async function handleSubmit(event) {
        event.preventDefault();

        const passesValidation = await Valido.isFormValid(values);
        
        if (passesValidation) {
            setStatus(RegisterStatus.completed);            
        } else {
            setStatus(RegisterStatus.failed);
            alert('Form is invalid');
            return;
        }
    }

    return (
        <Fragment>
            {status !== RegisterStatus.completed && (
                <RegisterForm
                    name={values.name}
                    email={values.email}
                    password={values.password}
                    dateOfBirth={values.dateOfBirth}
                    onInputChange={setValues}
                    onSubmit={handleSubmit}
                    formSubmitted={status !== RegisterStatus.idle}
                />
            )}
            {status === RegisterStatus.completed && (
                <RegisterConfirmation />
            )}
        </Fragment>
    );
}