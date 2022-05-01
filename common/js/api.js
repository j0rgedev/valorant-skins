export default async function getAPIData(url){
    const r = await fetch(url,{
        method: 'GET',
        headers: 
        {
            'Content-type': 'Node-fetch'
        }
    })
    return r.json();
}
