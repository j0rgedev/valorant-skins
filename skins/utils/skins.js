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
                    <div class="card ${array[i].displayName}" id="card">
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
                                <p id="chromas-button" class="${array[i].skins[j].levels[0].uuid}">Ver variantes</p>
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
        openChromas();
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
            skinNames.push({uuid: array[i].skins[j].levels[0].uuid, name: array[i].skins[j].levels[0].displayName,
            levels: array[i].skins[j].chromas});
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

const openChromas = () =>{
    const openChromasButton = document.querySelectorAll('#chromas-button');
    const closeChromasButton = document.querySelectorAll('#close-button');
    const bg = document.getElementById('overlay');

    openChromasButton.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            const chromas = document.getElementById('chromas');
            openChromas(chromas,btn);
        })
    })
    
    closeChromasButton.forEach(btn=>{
        btn.addEventListener('click',()=>{
            const chromas = document.getElementById('chromas');
            closeChromas(chromas);
        })
    })
    
    bg.addEventListener('click',()=>{
        const chromas = document.querySelectorAll('.skin-chromas.active');
        chromas.forEach(div=>{
            closeChromas(div)
        })
    })
    
    const openChromas = (div,btn) => {
        if (div==null) return;
        div.classList.add('active');
        bg.classList.add('active');
        showChromasSkins(btn.className);
    }
    
    const closeChromas = (div) => {
        if (div==null) return;
        div.classList.remove('active');
        bg.classList.remove('active');
        deleteChromasSkins();
    }
}


const showChromasSkins = (id) =>{
    let skinN = '';
    let levels = '';
    skinNames.forEach((skin,index)=>{
        if(skin.uuid===id){
            skinN = skin.name;
            levels = skin.levels;
        } 
    })
    document.querySelector('.skin-chromas-title').textContent = skinN;
    const body = document.querySelector('.skin-chromas-body');

    if (levels.length == 1){
        const chroma = document.createElement('div');
        chroma.innerHTML = `<h3>NO TIENE VARIANTES</h3>`
        body.appendChild(chroma);
        chroma.classList.add('chroma');
    } else {
        levels.forEach((level,index)=>{
            if(index>0){
                let chroma = document.createElement('div');
                chroma.innerHTML = `<h3>${level.displayName}</h3>
                <div class="chroma-img"><img src="${level.fullRender}"></div>`;
                body.appendChild(chroma);
                chroma.classList.add('chroma');
            }
        })
    }
}

const deleteChromasSkins = () =>{
    const title =  document.querySelector('.skin-chromas-title');
    title.textContent = '';
    const body = document.querySelector('.skin-chromas-body');
    while (body.firstChild){
        body.removeChild(body.firstChild);
    }
}

export {showAllContent};




