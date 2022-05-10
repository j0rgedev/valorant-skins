export const setSprays = (array) =>{
    const parent = document.querySelector('.cards_container');
    array.forEach(element => {
        const parentDiv = createElement('div','card');
        const firstChildDiv = createElement('div','front');
        const secondChildDiv = createElement('div','back');
        if(element.fullIcon==null){
            firstChildDiv.innerHTML = `<img src="${element.displayIcon}">`;
        } else {
            firstChildDiv.innerHTML = `<img src="${element.fullIcon}">`;
        }
        secondChildDiv.innerHTML = `<h1>${element.displayName}</h1>
                                    <img src="${element.displayIcon}">`
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
