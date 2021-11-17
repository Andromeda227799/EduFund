
import { useState } from 'react';
const useApi=(getData,endpoint)=>{
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    
    const request=async()=>{
        if(endpoint[0]=="/")console.log(endpoint[1]);

        setLoading(true);
        const response= await getData(endpoint);
        setLoading(false);

        if(!response.ok) return setError(true);
        setError(false);        
        //finalResponse.imageUri=images[index]; console.log(index);
        // console.log(response.data);
        setData(prev=>[...prev,response.data]);
        
      }
      // if(endpoint[0]=="/")console.log("sam-->",data);
    // setDataCopy(data);
    return {request,data,error,loading,setData}
}
export default useApi;
