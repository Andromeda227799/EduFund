
import client from './client';



const getFund=(endPoint)=>client.get(endPoint);
const getAll=()=>client.get("");

// console.log(response);

export default {
    getFund,getAll,
}