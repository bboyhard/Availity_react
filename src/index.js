import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const Example = () => (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    fullName: '',
                    npiNumber: '',
                    businessAddress: '',
                    telephoneNumber: '',
                    email: '',
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor="fullName">Full Name</label>
                        <Field name="fullName" placeholder="Jane Doe" />
                        <br/>
                        <label htmlFor="npiNumber">NPI Number</label>
                        <Field name="npiNumber" placeholder="12345" />
                        <br/>
                        <label htmlFor="businessAddress">Business Address</label>
                        <Field name="businessAddress" placeholder="123 St lane" />
                        <br/>
                        <label htmlFor="telephoneNumber">Telephone Number</label>
                        <Field name="telephoneNumber" placeholder="1-234-5678" />
                        <br/>
                        <label htmlFor="email">Email</label>
                        <Field name="email" placeholder="jane@acme.com" type="email" />
                        <br/>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );

ReactDOM.render(<Example />, document.getElementById('root'));
