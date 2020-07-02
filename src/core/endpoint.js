  
import axios from 'axios';
import User from '../../user';
//    baseURL: 'http://localhost:20635/api/' ,

let http = axios.create({
    baseURL: 'https://ecis-webapi.azurewebsites.net/api/' ,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'en'
      }
});

http.interceptors.request.use(requestConfig => {

    if(User.isLoggedIn())
    {
         let auth =  `Bearer ${User.getAccessToken()}` ;
        requestConfig.headers.Authorization = auth;
    }
   
    return requestConfig;
});


export default http;