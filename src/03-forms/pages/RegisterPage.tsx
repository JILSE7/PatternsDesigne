import '../styles/styles.css'
import { useState } from 'react';
import useForm from '../hooks/useForm';
/*interface IForm2 {
    name2:string,
    email2 : string,
    password2: string,
    repeatPassword2: string
}
 const initialState2:IForm2 = {
    name2:"", 
    email2:"", 
    password2:"", 
    repeatPassword2:""
} */

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

const RegisterPage = () => {

    const {email,name,password,repeatPassword,data,isValidEmail,handleChange} = useForm(initialState)
    /* const {email2,name2,password2,repeatPassword2,handleChange:hc2} = useForm(initialState2) */

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);

    }

  return (
    <div>
        <h1>RegisterPage</h1>

        <form onSubmit={(e) => onSubmit(e)} /* onSubmit={handleSubmit} */>
            <input type="text" placeholder="name" name='name' value={name} onChange={(e) => handleChange(e)} className={`${name.trim().length <= 0 && 'has-error'}`}/>
            {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
            <input type="email" placeholder="email" name='email' value={email} onChange={(e) => handleChange(e)} className={`${!isValidEmail(email) && 'has-error'}`}/>
            {!isValidEmail(email) && <span>Este campo es obligatorio</span>}
            <input type="password" placeholder="password" name='password' value={password} onChange={(e) => handleChange(e)}/>
            {password.trim().length < 6 && password.trim().length > 0 && <span>Contraseña de 6 letras</span>}
            {password !== repeatPassword && <span>Contraseñas diferentes</span>}
            <input type="password" placeholder="repeatpassword" name='repeatPassword' value={repeatPassword} onChange={(e) => handleChange(e)}/>
            {repeatPassword.trim().length < 6 && repeatPassword.trim().length > 0 && <span>Contraseña de 6 letras</span>}
            {repeatPassword.trim().length < 6 &&  password !== repeatPassword && <span>Contraseñas diferentes</span>}

            <button type="submit">Crear</button>
        </form>
    </div>
  )
}

export default RegisterPage