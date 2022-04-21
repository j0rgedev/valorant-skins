import fetch from 'node-fetch';

async function getWeapons(){
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
        .then((data) => console.log(loop(data)))
        .catch(err => console.error(err));
}

function loop(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i].displayName);
    }
}

getWeapons();