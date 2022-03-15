import { useEffect, useRef, useState } from "react";
import { IOnChangeArgs, IProduct } from '../interfaces/ProductInterfaces';

interface Props{
    product:IProduct,
    onChange?: (args:IOnChangeArgs) => void;
    value?:number

}


const useCount = ({onChange, product, value=0}: Props) => {

    const [counter, setcounter] = useState(value);

    const isControlled = useRef(!!onChange);


    
    const increasyBy = (value:number) => {
        
        if(isControlled.current){
            
            return onChange!({count:value,product})
        }
        const newValue = Math.max(counter + value , 0);
        
        setcounter(newValue);

        onChange && onChange({count:newValue,product})
    }
    
    
    useEffect(() => {
        setcounter(value);
    }, [value])

    return {
        counter,
        increasyBy
    }
}

export default useCount