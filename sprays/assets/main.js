import getAPIData from '../../common/js/api.js';
import {setSprays} from '../utils/sprays.JS';
import loadingContent from '../../common/js/other.js';

window.addEventListener('load',()=>{
    sessionStorage.removeItem('weapon-name');
    sessionStorage.removeItem('bundle-name');
    const url = 'https://valorant-api.com/v1/sprays';
    getAPIData(url)
        .then((data)=> setSprays(data.data))
        .catch((err)=>console.error(err))
        .finally(()=>{
            loadingContent();
        })
})