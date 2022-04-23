document.addEventListener("DOMContentLoaded", function() {
    async function displayWeapons(){
        const url = 'https://valorant-api.com/v1/weapons/';
        const r = await fetch(url,{
            method: 'GET',
            headers: 
            {
                'Content-type': 'Node-fetch'
            }
        })
            .then((r) => r.json())
            .then((data) => data.data)
            .then((data) => getWeapons(data))
            .catch(err => console.error(err));
    }
    
    async function getWeapons(array){
        let data = '';
        let content = document.querySelector('.cards_container');
        for(let i=0;i<array.length;i++){
            data+= `
                <div class="card">
                <div class="left_column">
                    <h2>${array[i].displayName}</h2>
                    <img src="./img/weapons_icons/${i+1}.webp" alt="${array[i].displayName}.png" class="card_image">
                </div>
                <div class="right_column">
                    <div>
                        <h4>${await getWeaponCategory(array,i)}</h4>
                    </div>
                    <div>
                        <h5>Wall penetration</h5>
                        <p>${await getWeaponPenetration(array,i)}</p>
                        <h5>Credits</h5>
                        <p>${await getWeaponCredits(array,i)}</p>
                    </div>
                    <button class="button">Ver skins</button>
                </div>
            </div>`
        }
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

    displayWeapons();
});

