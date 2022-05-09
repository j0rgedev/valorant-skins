import getAPIData from '../../common/js/api.js';
import {setHTML} from '../utils/bundles.js';
import loadingContent from '../../common/js/other.js'

window.addEventListener('load',()=>{
    sessionStorage.removeItem('weapon-name');
    sessionStorage.removeItem('bundle-name');
    const url = 'https://valorant-api.com/v1/bundles';
    const p1 = getAPIData(url)
                .then((data)=> setHTML(data.data))
                .catch((err)=>console.error(err))
                .finally(()=>{
                    loadingContent();
                    cardsonClick();
                })
   /*  Promise.allSettled([p1]) */
        
        
})

const cardsonClick = () =>{
    const cards = document.querySelectorAll('.card');
    cards.forEach((card)=>{
        card.addEventListener('click',()=>{
            const name = card.textContent;
            sessionStorage.setItem('bundle-name',name)
            location.href = '../skins/';
        })
    })
}

