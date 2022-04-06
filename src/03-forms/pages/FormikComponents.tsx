import React from 'react'
import '../styles/styles.css'

import {useFormik, Field,Form,ErrorMessage, Formik} from 'formik'
import * as Yup from 'yup';


interface IFORMVALUES {
    firstName: string,
    lastName: string,
    email: string
}

const FormikComponents = () => {

    



  return (
    <div>
        <h1>Formik Components</h1>

        <Formik 
            initialValues={{ firstName: '',lastName: '',email: '',jobType:'',terms:false}}
            onSubmit={(values) => {
                console.log(values);
            }}
            validationSchema={Yup.object(validationSchema())}
        >

            {
                (formik) => (
                    <Form>
                        <label htmlFor="firstName" >FirstName</label>
                        <Field name="firstName" type="text"/>
                        <ErrorMessage name='firstName' component='span'/>
            
                        <label htmlFor="lastName">LastName</label>
                        <Field name="lastName" type="text"/>
                        <ErrorMessage name='lastName' component='span'/>°
            
                        <label htmlFor="email" >Email</label>
                        <Field name="email" type="text"/>
                        <ErrorMessage name='email' component='span'/>


                        <label htmlFor="jobType" >Job Type</label>
                        <Field name="jobType" as="select">
                        <option defaultValue={""} value={""}>Seleccione</option>
                            <option value={"Developer"}>Desarrollador</option>
                            <option value={"Medico"}>Medico</option>
                            <option value={"DevOps"}>DevOps</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span'/>
                        
                        <label htmlFor="terms">
                            <Field name="terms" type="checkBox" id="terms" />
                            Terminos y condiciones
                        </label>
                        <ErrorMessage name='terms' component='span'/>
            
                        <button type='submit' >Iniciar Sesión</button>
                    </Form>
                )
            }
        </Formik>

       
    </div>
  )
}

export default FormikComponents;

const validationSchema = () => ({
    firstName: Yup.string().max(15,'Debe tener 15 caracteres o menos').required('Required'),
    lastName: Yup.string().max(10,'Debe tener 10 caracteres o menos').required('Required'),
    email: Yup.string().email('Email invalido').required('Required'),
    terms: Yup.boolean().isTrue('Debe aceptar los terminos'),
    jobType: Yup.string().notOneOf(['Medico'], 'Esta opción no es permitida').required()
    
});
