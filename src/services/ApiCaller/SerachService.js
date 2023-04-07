import ApiCaller from './ApiCaller/apiCaller'
import { API_URL } from '../constants/const';


export const getLocationId = (url, data) => {
    return new Promise((resolve, reject) => {
            ApiCaller.post(API_URL + url, data)
            .then((response) => {
              
              resolve(response.data);
            })
            .catch((error) => {
                console.error('ERROR')
            });
    });
  };

  
  export const getLocationData = (url) => {
    return new Promise((resolve, reject) => {
            ApiCaller.get(API_URL + url)
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
                console.error('ERROR')
            });
    });
  };



