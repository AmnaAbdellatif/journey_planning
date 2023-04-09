import Axios from 'axios';
import { API_URL } from '../../constants/const.js';

const ApiCaller = Axios.create({
    baseURL: API_URL
});
export default ApiCaller ;