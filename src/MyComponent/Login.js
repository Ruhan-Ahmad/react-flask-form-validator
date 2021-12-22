import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { genSaltSync, hashSync } from 'bcryptjs';
import {useState} from 'react';
const validationSchema = yup.object({
    email: yup.string().required("email is ruquired").email("enter a valid email"),
    password: yup.string().required("password is required").min(8, "must be 8 digit")
});

export const Login = () => {
    const [logincheck, setlogincheck] = useState('')
    const submit = async() =>  {
        const salt =genSaltSync(10);
        const hashPass = hashSync(formik.values.password, salt);
        let data = await fetch('http://localhost:5000/login', {
            method: "POST",
            body: JSON.stringify({
                email: formik.values.email,
                password: hashPass
            })
        })
        let res = await data.json();
        setlogincheck(res);
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (e) => { //This line is use for the purpose of handle submit when data gets validated
            submit()
        },
        validationSchema: validationSchema,
    });

    return (
        <div className="background p-5">
            {logincheck.login === "login"?<div className="alert alert-success" role="alert">
                                            {logincheck.msg}
                                                </div>:null}
                                                
            <div className="bg-light loginform">
                <form method="post" onSubmit={formik.handleSubmit}>
                    <TextField
                        className="col-md-9 py-2"
                        label="Enter Email"
                        type="email"
                        name='email'
                        id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    /> <br />
                    <TextField
                        type="password"
                        className="col-md-9 py-2"
                        label="Enter Password"
                        name='password'
                        id='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    /><br />
                    <Button type="submit" color="secondary" variant="outlined" className="my-2">LOGIN</Button>
                </form>
            </div>
        </div>
    )
}

