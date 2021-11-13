import {create} from 'apisauce';

const api=create({
    baseURL:'https://api.mfapi.in/mf',
})


// api.get('/listings').then(response=>{
//     if(!response.ok){
//         response.problem;
//     }
//     //console.log(response);
// })

export default api;