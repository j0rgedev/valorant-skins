import getAPIData from '../../common/js/api.js';
import {setPCards} from '../utils/pcards.js';
import loadingContent from '../../common/js/other.js';

window.addEventListener('load',()=>{
    sessionStorage.removeItem('weapon-name');
    sessionStorage.removeItem('bundle-name');
    const url = 'https://valorant-api.com/v1/playercards';
    getAPIData(url)
        .then((data)=> setPCards(data.data))
        .catch((err)=>console.error(err))
        .finally(()=>{
            loadingContent();
        })
})