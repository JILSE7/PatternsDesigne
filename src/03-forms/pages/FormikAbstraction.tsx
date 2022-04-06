import React from 'react'
import '../styles/styles.css'

import { MyTextInput, MySelect, MyCheckBox } from '../components';
import {useFormik, Field,Form,ErrorMessage, Formik} from 'formik'
import * as Yup from 'yup';



interface IFORMVALUES {
    firstName: string,
    lastName: string,
    email: string
}

const FormikAbstraction = () => {

    



  return (
    <div>
        <h1>Formik Components Abstraction</h1>

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

                        <MyTextInput label='Nombre' name='firstName' type='text' />
                        <MyTextInput label='Apellido' name='lastName' type='text' />
                        <MyTextInput label='Email' name='email' type='text' />

                        
                        <MySelect label='Job Type' name="jobType" as="select">
                            <option defaultValue={""} value={""}>Seleccione</option>
                            <option value={"Developer"}>Desarrollador</option>
                            <option value={"Medico"}>Medico</option>
                            <option value={"DevOps"}>DevOps</option>
                        </MySelect>
                        
                        <MyCheckBox label='Terminos y condiciones' name='terms' id='terms'/>
            
                        <button type='submit' >Iniciar Sesión</button>
                    </Form>
                )
            }
        </Formik>

       
    </div>
  )
}

export default FormikAbstraction;

const validationSchema = () => ({
    firstName: Yup.string().max(15,'Debe tener 15 caracteres o menos').required('El nombre es requerido'),
    lastName: Yup.string().max(10,'Debe tener 10 caracteres o menos').required('Required'),
    email: Yup.string().email('Email invalido').required('El email no puede ir vacio'),
    terms: Yup.boolean().isTrue('Debe aceptar los terminos'),
    jobType: Yup.string().notOneOf(['Medico'], 'Esta opción no es permitida').required()
    
});
