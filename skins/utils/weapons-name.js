const getNames = (array) => {
    let data = '';
    const content = document.querySelector('.weapons_select');
    for(let i in array){
        data+=`<option value="${array[i].displayName}">${array[i].displayName}</option>`
    }
    content.innerHTML = data;
}

export {getNames}