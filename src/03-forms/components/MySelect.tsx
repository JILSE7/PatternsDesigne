import { ErrorMessage, useField } from 'formik';

interface IProps {
    name:string,
    label:string,
    placeholder?: 'string',
    [x:string]:any

}

const MySelect = ({label, ...props}:IProps):JSX.Element => {

        const [field, meta] = useField(props);

  return (
    <>
        <label htmlFor={props.id || props.name} >{label}</label>
        <select {...field} {...props}/>
        
        {/* {
            meta.touched && meta.error && (
                <span className='error'>{meta.error}</span>
            )
        } */}

        <ErrorMessage name={props.name} component="span" className='custom-span-error-class'/>
    </>
  )
}

export default MySelect