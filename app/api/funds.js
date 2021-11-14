
import client from './client';



const getFund=(endPoint)=>client.get(endPoint);


export default {
    getFund,
}