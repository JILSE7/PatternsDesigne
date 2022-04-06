import {ErrorMessage, useField } from 'formik';

interface IProps {
    name:string,
    label:string,
    type?: 'text'|'email'|'password',
    placeholder?: 'string',
    [x:string]:any

}

const MyTextInput = ({label, ...props}:IProps):JSX.Element => {

        const [field, meta] = useField(props);

        console.log(meta);

  return (
    <>
        <label htmlFor={props.id || props.name} >{label}</label>
        <input className='text-input' {...field} {...props}/>
        
        {
            meta.touched && meta.error && (
                <span className='error'>{meta.error}</span>
            )
        }

        {/* <ErrorMessage name={props.name} component="span" className='custom-span-error-class'/> */}
    </>
  )
}

export default MyTextInput