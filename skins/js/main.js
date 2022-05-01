import getAPIData from '../../common/js/api.js';
import showContent from '../utils/skins.js';

document.addEventListener('DOMContentLoaded',()=>{
    const url = 'https://valorant-api.com/v1/weapons';
    getAPIData(url)
        .then((data) => showContent(data.data))
        .catch(err => console.error(err));
})