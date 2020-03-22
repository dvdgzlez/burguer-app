import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-a5840.firebaseio.com/'
});

export default instance;