export default function showContent(array){
    let data = '';
    const aux = document.getElementById('cards_wr');
    const content = document.querySelector('.cards_container');
    const loader = document.getElementById('loader');
    for(let i=0;i<array.length;i++){
        data+= `
            <div class="card">
            <div class="left_column">
                <h2>${array[i].displayName}</h2>
                <img src="${getWeaponIcon(array,i)}" alt="${array[i].displayName}.png" class="card_image">
            </div>
            <div class="right_column">
                <div>
                    <h4>${getWeaponCategory(array,i)}</h4>
                </div>
                <div>
                    <h5>Wall penetration</h5>
                    <p>${getWeaponPenetration(array,i)}</p>
                    <h5>Credits</h5>
                    <p>${getWeaponCredits(array,i)}</p>
                </div>
                <button class="button">Ver skins</button>
            </div>
        </div>`
    }
    loader.style.display= 'none';
    aux.style.height = 'auto';
    content.innerHTML = data;
}

function getWeaponCategory(array,pos){
    const aux = array[pos].category;
    const cat = aux.split('::');
    if (cat[1]=='Heavy'){
        return 'Machine Gun';
    } else {
        return cat[1];
    }
}

function getWeaponPenetration(array,pos){
    if (pos!=17){
        const aux = array[pos].weaponStats.wallPenetration;
        const cat = aux.split('::');
        return cat[1];
    } else {
        return 'Null';
    }
}

function getWeaponCredits(array,pos){
    if (pos!=17){
        return array[pos].shopData.cost;
    } else {
        return 'Null';
    }
}

function getWeaponIcon(array,pos){
    return array[pos].killStreamIcon;
}