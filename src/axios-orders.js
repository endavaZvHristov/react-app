import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-burger-108b5.firebaseio.com/',
});

export default instance;