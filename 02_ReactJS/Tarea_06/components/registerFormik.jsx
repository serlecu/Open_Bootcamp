import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { redirect } from 'react-router-dom';

import { User } from '../../../models/user.class';
import { ROLE } from '../../../models/roles.enum';



const RegisterFormik = () => {

    let user = new User();

    const submit = (values) => {
        console.log('Registerd user');
    }

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ROLE.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(3, 'Username must be at least 3 characters')
                .max(12, 'Username must be at most 15 characters')
                .required('username is required'),
            email: Yup.string()
                .email('Invalid email')
                .required('email is required'),
            role: Yup.string().oneOf([ROLE.USER, ROLE.ADMIN], 'You must select a role')
                .required('role is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('password is required'),
            confirmPassword: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Passwords must match'
                    )
                })
                .required('confirm password is required')
        });


    return (
        <div>
            <h4>Register Form</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values);
                    redirect('/dashboard');
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur
                }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field
                            id="username"
                            name="username"
                            placeholder="username" />
                        {
                            errors.username && touched.username && (
                                <ErrorMessage name="username"
                                    component='div' />
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="email@email.com" />
                        {
                            errors.email && touched.email && (
                                <ErrorMessage name="email"
                                    component='div' />
                            )
                        }

                        {/* <label htmlFor="role">Username</label>
                        <Field
                            id="role"
                            name="role"
                            placeholder="role" />
                        {
                            errors.role && touched.role && (
                                <ErrorMessage name="role"
                                    component='div' />
                            )
                        } */}

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password" />
                        {
                            errors.password && touched.password && (
                                <ErrorMessage name="password"
                                    component='div' />
                            )
                        }

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="confirmPassword" />
                        {
                            errors.confirmPassword && touched.confirmPassword && (
                                <ErrorMessage name="confirmPassword"
                                    component='div' />
                            )
                        }

                        <button type="submit">Register</button>
                        {isSubmitting ? <p>Registering your credentials...</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
