import React from 'react'
import '../styles/styles.css'

import {FormikErrors, useFormik} from 'formik'


interface IFORMVALUES {
    firstName: string,
    lastName: string,
    email: string
}

const FormikPage = () => {

    const validate = ({email,lastName,firstName}:IFORMVALUES) => {

        const errors:FormikErrors<IFORMVALUES> = {};

        
        if(!firstName.trim())errors.firstName = 'Required'
        else if(firstName.length > 15)errors.firstName = 'FirstName must be max 15 characters'

        if(!lastName.trim())errors.lastName = 'Required'
        else if(lastName.length > 10)errors.lastName = 'LastName must be max 10 characters'

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;

    }

    const {handleSubmit,handleChange, values, errors, touched, handleBlur} = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: ''
        }, 
        onSubmit: (values,e) => {
            console.log(values);    
        },
        validate
    });

    


  return (
    <div>
        <h1>Formik Tutorial</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" >FirstName</label>
            <input type="text" name='firstName' id='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur}/>
            {touched.firstName && errors.firstName && <span>{'First Name is ' + errors.firstName}</span>}

            <label htmlFor="lastName">LastName</label>
            <input type="text" name='lastName' id='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
            {touched.lastName && errors.lastName && <span>{'Last Name is ' + errors.lastName}</span>}

            <label htmlFor="email" >Email</label>
            <input type="text" name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
            {touched.email && errors.email && <span>{errors.email}</span>}
            
            

            <button type='submit' >Iniciar Sesión</button>
        </form>
    </div>
  )
}

export default FormikPage