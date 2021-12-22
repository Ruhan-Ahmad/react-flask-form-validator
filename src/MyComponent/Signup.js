import React from 'react'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {useState} from 'react';
import { genSaltSync, hashSync } from 'bcryptjs';

const validationSchema = yup.object({
    firstName: yup.string().required("first name is required").min(3,"first name must be 3 char long").max(32,"name must be less then 32"),
    lastName: yup.string().required("last name is required").min(3 ,"last name be 3 char long").max(32,"last name must be shorter then 32"),
    email: yup.string().required("email is required").email("enter a valid email"),
    password: yup.string().required("password is required").min(8,"password must be 8 digit long"),
    confirmPassword: yup.string().required("Confirm password is required").min(8,"password must be 8 digit long")
    .oneOf([yup.ref("password"), null], "password must match")
});
export const Signup = () => {
    const [signupcheck, setsignupcheck] = useState('')
    const signupSubmit =async()=>{
        const salt = genSaltSync(10);
        const hashPass = hashSync(formik.values.password, salt);
        let data = await fetch('http://127.0.0.1:5000/signup', {
            method: "POST",
            body: JSON.stringify({
                firstName: formik.values.firstName,
                lastName: formik.values.lastName,
                email: formik.values.email,
                password: hashPass
            })   
        })
            let res = await data.json();
            setsignupcheck(res);
    }

    const formik = useFormik({
        initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
        },
        onSubmit: (e)=>{
            signupSubmit()
        },
         validationSchema: validationSchema
    });
    return (
    <div className="background p-5">
        {signupcheck.signup === "signup" ? <div className="alert alert-success" role="alert">
                                            {signupcheck.msg}
                                                </div> : null}
            <div className='bg-light loginform'>
                <form method='post' onSubmit={formik.handleSubmit}>
                    <TextField 
                    label="Enter First Name"
                    type="text"
                    id='Firstname'
                    name="firstName"
                    className="py-2"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error = {formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText  ={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                    className="mx-2 py-2"
                    label="Enter Last Name"
                    type="text"
                    name="lastName"
                    id="LastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error = {formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText  ={formik.touched.lastName && formik.errors.lastName}
                    /><br/>
                    <TextField 
                    className="col-md-9 py-2"
                    label="Enter Email"
                    type="email"
                    name="email"
                    id='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error = {formik.touched.email && Boolean(formik.errors.email)}
                    helperText  ={formik.touched.email && formik.errors.email}
                    /><br />
                    <TextField 
                    label="Enter Password"
                    type="password"
                    id="password"
                    className="py-2"
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error = {formik.touched.password && Boolean(formik.errors.password)}
                    helperText  ={formik.touched.password && formik.errors.password}
                    />
                    <TextField 
                    className="mx-2 py-2"
                    label="Re-Enter Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error = {formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText  ={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    /> <br />
                    <Button color="secondary" type="submit" variant="outlined" className='my-2'>SIGNUP</Button>
                </form>
            </div>
        </div>
    )
}
