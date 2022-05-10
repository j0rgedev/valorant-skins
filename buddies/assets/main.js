import getAPIData from '../../common/js/api.js';
import {setBuddies} from '../utils/buddies.js'
import loadingContent from '../../common/js/other.js'

window.addEventListener('load',()=>{
    sessionStorage.removeItem('weapon-name');
    sessionStorage.removeItem('bundle-name');
    const url = 'https://valorant-api.com/v1/buddies';
    getAPIData(url)
        .then(data => setBuddies(data.data))
        .catch(err => console.error(err))
        .finally(()=>{
            loadingContent();
        })
})