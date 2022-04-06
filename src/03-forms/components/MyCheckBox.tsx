import {ErrorMessage, useField } from 'formik';

interface IProps {
    name:string,
    label:string,
    placeholder?: 'string',
    [x:string]:any

}

const MyCheckBox = ({label, ...props}:IProps):JSX.Element => {

        const [field, meta] = useField({...props, type:'checkbox'});

  return (
    <>
        <label htmlFor={props.id || props.name} >
            <input type="checkbox"  {...field} {...props}/>
            {label}
        </label>
        
        {/* {
            meta.touched && meta.error && (
                <span className='error'>{meta.error}</span>
            )
        } */}

        <ErrorMessage name={props.name} component="span" className='custom-span-error-class'/>
    </>
  )
}

export default MyCheckBox;