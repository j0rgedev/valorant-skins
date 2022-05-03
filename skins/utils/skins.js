import loadingContent from '../../common/js/other.js'
import getAPIData from '../../common/js/api.js';

export default async function showContent(array){
    runTest();
    let data = '';
    const content = document.querySelector('.cards_container');
    const f = document.getElementById('filters');
    setTimeout(() => {
        for(let i=0;i<array.length;i++){
            for(let j=0;j<array[i].skins.length;j++){
                let cost = array[i].skins[j].levels[0].uuid;
                data+=`
                    <div class="card ${array[i].displayName}">
                        <div class="front">
                            <div>
                                <h2>${array[i].skins[j].displayName}</h2>
                            </div>
                            <div>
                                <img src=${array[i].skins[j].chromas[0].fullRender}>
                            </div>
                            <div>
                                ${getPrices(cost)}
                            </div>
                            <div>
                                <p>Ver variantes</p>
                            </div>
                        </div>
                        <div class="back">
                            <div>
                                <img class="card_img" src=${array[i].skins[j].chromas[0].fullRender}>
                            </div>
                        </div> 
                    </div>      
                `
            }
        }
        f.style.display = 'flex';
        loadingContent();
        content.innerHTML = data;
    }, 2000);
}

const skinsPrices = [];

const runTest = () =>{
    const url = 'https://api.henrikdev.xyz/valorant/v1/store-offers';
    getAPIData(url)
        .then(data => data.data)
        .then(data => setArray(data.Offers))
        .catch(err => console.error(err));
}

const setArray = (array) => {
    for (let i=0; i<array.length; i++){
        let aux = {};
        let price = Object.values(array[i].Cost)[0];
        skinsPrices.push(Object.assign(aux,{uuid:array[i].OfferID},{cost:price}));
    }
}

function getPrices(id){
    const aux = []
    for(let i in skinsPrices){
        aux.push(skinsPrices[i].uuid)
    }
    let pos = aux.indexOf(id)
    if (pos==-1){
        return `<p>Costo: Gratis</p>`;
    } else {
        return `
            <p>Costo: ${skinsPrices[pos].cost}</p>
            <img src="https://vgraphs.com/images/creds/valorant-points-38-gray.png">
        `;
    }
}




