const bundlesNames = [];

const setHTML = (array) =>{
    const parent = document.querySelector('.cards_container');
    array.forEach((element,index) => {
        const parentDiv = createElement('div','card');
        const firstChildDiv = createElement('div','card-img');
        const secondChildDiv = createElement('div','card-title');
        firstChildDiv.innerHTML = `<img src="${element.displayIcon}">`;
        secondChildDiv.innerHTML = `<h1>${element.displayName}</h1>`
        parent.appendChild(parentDiv);
        parentDiv.appendChild(firstChildDiv);
        parentDiv.appendChild(secondChildDiv);
        addCardBG(element.displayIcon,index);
    });
    removePreLoadingStuff();
}

const createElement = (name,classN) => {
    const div = document.createElement(name);
    div.classList.add(classN);
    return div;
}

const removePreLoadingStuff = () =>{
    const loader = document.getElementById('loader');
    const cardsC = document.getElementById('cards_wr');
    loader.style.display = 'none';
    cardsC.style.height = 'auto';
}

const addCardBG = (url,index) =>{
    const cards = document.querySelectorAll('.card');
    cards[index].style.background = `url('${url}')`;
}

export {setHTML}

