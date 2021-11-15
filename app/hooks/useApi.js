
import { useState } from 'react';
const useApi=(getData,endpoint,images)=>{
    const [data,setData]=useState([]);
    // const [dataCopy,setDataCopy]=useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);

    const request=async()=>{
      endpoint.forEach(async (element,index) => {
        setLoading(true);
        const response= await getData(element);
        setLoading(false);

        if(!response.ok) return setError(true);
    
        setError(false);
        const finalResponse=response.data;
        finalResponse.imageUri=images[index];
        // console.log(index);
        setData(prev=>[...prev,finalResponse]);
      });
        
      }
    // setDataCopy(data);
    return {request,data,error,loading,setData}
}
export default useApi;
