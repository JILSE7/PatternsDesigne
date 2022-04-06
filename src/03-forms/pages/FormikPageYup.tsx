import React from 'react'
import '../styles/styles.css'

import {useFormik} from 'formik'
import * as Yup from 'yup';


interface IFORMVALUES {
    firstName: string,
    lastName: string,
    email: string
}

const FormikPageYup = () => {

    //const {handleSubmit,handleChange, values, errors, touched, handleBlur, getFieldProps} = useFormik<IFORMVALUES>({
    const {handleSubmit, errors, touched, getFieldProps} = useFormik<IFORMVALUES>({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
        }, 
        onSubmit: (values,e) => {
            console.log(values);    
        },
        validationSchema:Yup.object(validationSchema())
    });

    


  return (
    <div>
        <h1>Formik Yup</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" >FirstName</label>
            <input 
                type="text" 
                id='firstName' 
                /* value={values.firstName}  //INTERCAMBIO POR getFieldProps
                name="firstName"
                onChange={handleChange} 
                onBlur={handleBlur} */
                {...getFieldProps('firstName')}
            />
            {touched.firstName && errors.firstName && <span>{'First Name is ' + errors.firstName}</span>}

            <label htmlFor="lastName">LastName</label>
            <input 
                type="text" 
                id='lastName' 
                {...getFieldProps('lastName')}
            />
            {touched.lastName && errors.lastName && <span>{'Last Name is ' + errors.lastName}</span>}

            <label htmlFor="email" >Email</label>
            <input 
                type="text" 
                id='email' 
                {...getFieldProps('email')}
            />
            {touched.email && errors.email && <span>{'Email is ' + errors.email}</span>}
            
            

            <button type='submit' >Iniciar Sesión</button>
        </form>
    </div>
  )
}

export default FormikPageYup;

const validationSchema = () => ({
    firstName: Yup.string().max(15,'Debe tener 15 caracteres o menos').required('Required'),
    lastName: Yup.string().max(10,'Debe tener 10 caracteres o menos').required('Required'),
    email: Yup.string().email('Email invalido').required('Required'),
    
});
