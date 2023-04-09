import ApiCaller from './apiCaller';
import { API_URL } from '../../constants/const';
  
  export const getLocationData = (language,outputFormat,type_sf,name_sf) => {

    return new Promise((resolve, reject) => {
            ApiCaller.get(API_URL, {params:{ language: language, outputFormat: outputFormat,type_sf:type_sf,name_sf:name_sf }})
            .then((response) => {
              console.log('avant return',response.data.locations);
              resolve(response.data.locations);
              
            })
            .catch((error) => {
                console.error('ERROR');
                console.log('erreur',error);
            });
    });
  };






