export const setBuddies = (array) =>{
    const parent = document.querySelector('.cards_container');
    array.forEach((element,index) => {
        const parentDiv = createElement('div','card');
        parent.appendChild(parentDiv);
        const childDiv = createElement('div','card-info');
        parentDiv.appendChild(childDiv);
        const firstChildDiv = createElement('div','c-title');
        const secondChildDiv = createElement('div','c-img');
        firstChildDiv.innerHTML = `<h1>${element.displayName}</h1>`;
        secondChildDiv.innerHTML = `<img src="${element.displayIcon}">`;
        childDiv.appendChild(firstChildDiv);
        childDiv.appendChild(secondChildDiv);
        addCardBG(element.displayIcon,index);
    });
}

const createElement = (name,classN) => {
    const div = document.createElement(name);
    div.classList.add(classN);
    return div;
}

const addCardBG = (url,index) =>{
    const cards = document.querySelectorAll('.card');
    cards[index].style.background = `url('${url}') center no-repeat`;
    cards[index].style.backgroundSize = '700% 300%';
    cards[index].style.backgroundPositionY = '-247px';
}