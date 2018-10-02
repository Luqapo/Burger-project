import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgerproject-20650.firebaseio.com/'
});

export default instance;