import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
    params:{
        api_key: 'fffe0f9dcc46116d9d5446a74b692eb0',
        language: 'en-US'
    }
});

export default api;
