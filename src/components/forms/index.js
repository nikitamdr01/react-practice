"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';

const schema = object({
    email: string().required("Please enter valid email"),
    name: string().min(7, "Name must be at least 7 characters").required("Name is required"),
    password: string().required("Password is required").matches(/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one letter, one number, and one special character"),
})
const Form = () => {
    //const [fullName, setFullname] = useState("");
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");

    const [showValue, setshowValue] = useState("");
    const [showPassword, setshowPassword] = useState("false");

    const formik = useFormik({
        initialValues: {
            name: "aaa",
            email: "",
            password: "",
            confirmPassword: ""
        },

        onSubmit: (value) => {
            if (value.password === value.confirmPassword) {
                setshowValue(true);
            }
            else {
                alert("Password do not match");
                setshowValue(false);
            }
        },
        validationSchema: schema,
    })

    const toggleVisibility = () => {
        setshowPassword(!showPassword)
    }


    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <h1>Register Form</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input type='text'
                                name='name'
                                id='name'
                                value={formik.values.name}
                                className='border border-purple-500'
                                onChange={formik.handleChange} />
                                <span className='text-red-600' >{formik.errors.name}</span>
                        </div>
                        <div>
                            <label htmlFor='email'>email</label>
                            <input type='email'
                                name='email'
                                id='email'
                                value={formik.values.email}
                                className='border border-purple-500'
                                onChange={formik.handleChange} />
                            <span className='text-red-600' >{formik.errors.email}</span>
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input type='password'
                                password='password'
                                id='password'
                                value={formik.values.password}
                                className='border border-purple-500'
                                onChange={formik.handleChange} />
                                <span className='text-red-600' >{formik.errors.password}</span>
                        </div>
                        <div>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input type='password'
                                password='password'
                                id='confirmPassword'
                                value={formik.values.confirmPassword}
                                className='border border-purple-500'
                                onChange={formik.handleChange} />
                                <span className='text-red-600' >{formik.errors.password}</span>
                        </div>
                        <button className='bg-blue-300'>Submit</button>
                    </form>
                </div>
                <div>
                    <h1>Form Values</h1>
                    {
                        showValue && (
                            <div>
                                <h2>Name:{formik.values.name}</h2>
                                <h2>Email:{formik.values.email}</h2>
                                <h2>Password:{formik.values.password}</h2>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Form;