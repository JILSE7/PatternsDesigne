
import formJson from '../data/customForm.json'
import { Formik, Form } from 'formik';
import MyTextInput from '../components/MyTextInput';
import MySelect from '../components/MySelect';
import * as Yup from 'yup';

let initialValues:{[key:string]:any} = {};

const requiredFields:{[key:string]:any} = {};

formJson.forEach(item => {
    initialValues[item.name]=item.value;

    if(item.validations){
        let schema = Yup.string();

        item.validations.forEach(validation => {
            if(validation.type === "required"){
                schema = schema.required('Este campo es requerido')
            }
            if(validation.type === "minLength"){
                schema = schema.min(validation.values!,`La cantidad minima son ${validation.values!}`)
            }

            if(validation.type === "email"){
                schema = schema.email('Email invalido')
            }
        })

        requiredFields[item.name] = schema;
    }

})



const validationSchema = Yup.object({...requiredFields})

const DinamikForm = () => {
    console.log(formJson);
  return (
    <div>
        <h1>Dinamik Form</h1>

        <Formik initialValues={initialValues} onSubmit={(value)=> console.log(value)} validationSchema={validationSchema}>
            {(formik) => (
                <Form>
                    <span>hola mudo</span>

                    {
                        formJson.map((field,i) => {
                            if(field.type === 'input' || field.type === 'password' || field.type === 'email'){
                                return (
    
                                    <MyTextInput name={field.name} type={(field.type as any)} label={field.label} placeholder={field.placeholder} key={i}/>
                                )
                            }else if(field.type === 'select'){
                                return(
                                    <MySelect key={i} name={field.name} label={field.label} options={field.options}>
                                        <option value={""}>Select an option</option>
                                        {field.options?.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                                    </MySelect>
                                )
                            }
                            
                        })
                    }

                    <button type='submit' >Iniciar Sesión</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default DinamikForm