
import { useState } from 'react';
export default useApi=(getData)=>{
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);

    const request=async()=>{
        setLoading(true);
        const response= await getData();
        setLoading(false);

        if(!response.ok) return setError(true);
    
        setError(false);
        setData(response.data);
      }
    return {request,data,error,loading}
}
