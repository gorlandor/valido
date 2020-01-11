import React, { Fragment } from 'react';

export default function RegisterConfirmation() {
    return (
        <Fragment>
            <div className="container">
                <form>
                    <div className="card">
                        <div className="card-header">
                            <h2>Example Form</h2>
                        </div>
                        <div className="card-body">
                            <h4>Success</h4>
                            <p>You are now registered!</p>
                            <p>
                                If this were a real app, an email would have been sent to you for account confirmation.
                            </p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-success btn-block">
                                Continue to Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}
