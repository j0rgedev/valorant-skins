import loadingContent from '../../common/js/other.js'
import getAPIData from '../../common/js/api.js';

async function showAllContent(array){
    runOffers();
    let data = '';
    const content = document.querySelector('.cards_container');
    const disc = document.getElementById('disclaimer');
    const f_icon = document.getElementById('f-icon');
    const s_icon = document.getElementById('s-icon-wrapper');
    setTimeout(() => {
        for(let i=0;i<array.length;i++){
            for(let j=0;j<array[i].skins.length;j++){
                let cost = array[i].skins[j].levels[0].uuid;
                data+=`
                    <div class="card ${array[i].displayName} ${array[i].skins[j].levels[0].uuid}" id="card">
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
        content.innerHTML = data;
        loadingContent();
        disc.classList.add('active');
        f_icon.classList.add('active');
        s_icon.classList.add('active');
        searchSkins();
        if(isWeaponFiltered()){
            let name = sessionStorage.getItem('weapon-name');
            beginningFilter(name);
            setSelectedAttribute(name);
        }
        setSkinNamesArray(array);
    }, 1500);
}

let skinsPrices = [];

const runOffers = () =>{
    const url = 'https://api.henrikdev.xyz/valorant/v1/store-offers';
    getAPIData(url)
        .then(data => data.data)
        .then(data => setSkinPricesArray(data.Offers))
        .catch(err => console.error(err));
}

const setSkinPricesArray = (array) => {
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

const isWeaponFiltered = () =>{
    const name = sessionStorage.getItem('weapon-name');
    if (name==null){
        return false;
    } else {
        return true;
    }
}

const beginningFilter = (name) => {
    let aux = sessionStorage.getItem('cont');
    sessionStorage.setItem('cont',Number(aux)+1);
    const cont = sessionStorage.getItem('cont');   
    const all_cards = document.querySelectorAll('.card');
    all_cards.forEach((elem) => {
        if(elem.classList.contains(name)){
            elem.style.display = 'block';
        } else {
            elem.style.display = 'none';
        }
    })
}

const setSelectedAttribute = (name) =>{
    const content = document.querySelectorAll('#option');
    content.forEach((elem)=>{
        if (elem.textContent === name){
            elem.setAttribute('selected',true)
        }
    })
}

const skinNames = [];

const setSkinNamesArray = (array) => {
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].skins.length;j++){
            skinNames.push({uuid: array[i].skins[j].levels[0].uuid, name: array[i].skins[j].levels[0].displayName});
        }
    } 
} 

const searchSkins = () =>{
    const sInput = document.getElementById('search');
    const cards = document.querySelectorAll('.card');
    sInput.addEventListener('input',e=>{
        const value = e.target.value;
        skinNames.forEach((skin,index) =>{
            if(skin.name.toLowerCase().includes(value.toLowerCase())){
                cards[index].classList.remove('hide');
            } else {
                cards[index].classList.add('hide');
            }
        })
    })
}

export {showAllContent};




