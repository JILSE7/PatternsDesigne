import { useState } from "react";

const useCount = () => {
    const [counter, setcounter] = useState(0);

    const increasyBy = (value:number) => setcounter(prev => Math.max(prev + value , 0)) 
    return {
        counter,
        increasyBy
    }
}

export default useCount