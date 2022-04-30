import showContent from '../utils/weapons.js';

document.addEventListener("DOMContentLoaded", function() {
    async function getAPIData(){
        const url = 'https://valorant-api.com/v1/weapons/';
        const r = await fetch(url,{
            method: 'GET',
            headers: 
            {
                'Content-type': 'Node-fetch'
            }
        })
        return r.json();
    }
    getAPIData()
        .then((data) => showContent(data.data))
        .catch(err => console.error(err));
        
});

