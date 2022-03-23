import { useEffect, useRef, useState } from "react";
import { IOnChangeArgs, IProduct, valuesInitial } from '../interfaces/ProductInterfaces';

interface Props{
    product:IProduct,
    onChange?: (args:IOnChangeArgs) => void;
    value?:number,
    initialValues?: valuesInitial

}


const useCount = ({onChange, product, value=0, initialValues}: Props) => {

    console.log(initialValues);

    const [counter, setcounter] = useState(initialValues?.count || value);

    const isControlled = useRef(!!onChange);
    const isMounted = useRef<boolean>(false)


    
    const increasyBy = (value:number) => {
        
        if(isControlled.current){
            
            return onChange!({count:value,product})
        }

        let newValue = initialValues?.maxCount ? 
                        Math.min(Math.max(counter + value , 0), initialValues?.maxCount!) : //minimo, toma el mas chico de los dos lados (4,5) = 4 , (5,4) = 4
                        Math.max(counter + value , 0);

        
             
            
            setcounter(newValue);
    
            onChange && onChange({count:newValue,product})
            

    }

    useEffect(() => {
        isMounted.current = true;
    }, []);
    
    useEffect(() => {

        if(isMounted.current){
            console.log("ya me monte");
            setcounter(initialValues?.count || value);
            return
        }

        console.log("aun no he terminado de montarm");
        
    }, [value])


    
    

    return {
        counter,
        increasyBy,
        maxCount:initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        reset: () => setcounter(initialValues?.count || value)
    }
}

export default useCount