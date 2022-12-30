import axios from 'axios';

//Server url
const baseUrl = 'http://example.com';


export const login=(data)=>axios.post(baseUrl,data);
export const signup=(data)=>axios.post(baseUrl,data);