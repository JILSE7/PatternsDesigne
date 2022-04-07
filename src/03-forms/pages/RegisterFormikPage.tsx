import '../styles/styles.css'

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

interface IForm {
    name:string,
    email : string,
    password: string,
    repeatPassword: string
}


const initialState:IForm = {
    name:"", 
    email:"", 
    password:"", 
    repeatPassword:""
}

const RegisterFormikPage = () => {

    
    

  

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik 
            initialValues={initialState}
            onSubmit={(values) => {
                console.log(values);
            }}

            validationSchema={Yup.object(validationSchema())}
            >

                {
                    ({handleReset}) => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field name='name' type='text' id="name"/>
                            <ErrorMessage name='name' component={'span'}/>

                            <label htmlFor="email">Email</label>
                            <Field name='email' type='text' id="email"/>
                            <ErrorMessage name='email' component={'span'}/>

                            <label htmlFor="password">Password</label>
                            <Field name='password' type='password' id="password"/>
                            <ErrorMessage name='password' component={'span'}/>

                            <label htmlFor="repeatPassword">Repeat Password</label>
                            <Field name='repeatPassword' type='password' id="repeatPassword"/>
                            <ErrorMessage name='repeatPassword' component={'span'}/>


                            <button type='submit' >Iniciar Sesión</button>
                            <button onClick={handleReset} >Vaciar</button>
                        </Form>
                    )
                }

        </Formik>

        
    </div>
  )
}

export default RegisterFormikPage;

const validationSchema = () => ({
    name: Yup.string().min(2,'Se necesitan por lo menos 2 caracteres').max(15, 'Debe tener 15 caracteres o menos').required('Es requerido'),
    email: Yup.string().email('Email invalido').required('Required'),
    password: Yup.string().required('Requerido').min(6, 'Minimo 6 letras').oneOf([Yup.ref('repeatPassword')],'Las contraseñas no son iguales'),
    repeatPassword: Yup.string().required().min(6, 'Minimo 6 letras').oneOf([Yup.ref('password')],'Las contraseñas no son iguales'),
})

