
import client from './client';

const endPoint="/100350";

const getFund=()=>client.get(endPoint);


export default {
    getFund,
}