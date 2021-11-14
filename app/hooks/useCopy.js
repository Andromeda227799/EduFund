
import { useState } from 'react';
const useCopy=(data)=>{
    const [copy, setcopy] = useState([]);
    ()=>setcopy(data);
    // console.log(data);
    return {copy,setcopy};
}
export default useCopy;
