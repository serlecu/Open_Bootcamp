import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io/jokes',
        responseType: 'json',
        timeout: 6000
        
    }
);