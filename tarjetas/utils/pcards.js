export const setPCards = (array) =>{
    const parent = document.querySelector('.cards_container');
    array.forEach(element => {
        const parentDiv = createElement('div','card');
        const firstChildDiv = createElement('div','card-img');
        const secondChildDiv = createElement('div','card-title');
        firstChildDiv.innerHTML = `<img src="${element.wideArt}">`;
        secondChildDiv.innerHTML = `<h1>${element.displayName}</h1>`
        parent.appendChild(parentDiv);
        parentDiv.appendChild(firstChildDiv);
        parentDiv.appendChild(secondChildDiv);
    });
} 

const createElement = (name,classN) => {
    const div = document.createElement(name);
    div.classList.add(classN);
    return div;
}
