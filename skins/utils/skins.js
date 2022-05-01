import loadingContent from '../../common/js/other.js'

export default async function showContent(array){
    let data = '';
    const content = document.querySelector('.cards_container');
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].skins.length;j++){
            data+=`
                <div class="card ${array[i].displayName}" data-aos="fade-up">
                    <div class="front">
                        <div>
                            <h2>${array[i].skins[j].displayName}</h2>
                        </div>
                        <div>
                            <img src=${array[i].skins[j].chromas[0].fullRender}>
                        </div>
                        <div>
                            <p>Costo: 1000</p>
                            <img src="https://vgraphs.com/images/creds/valorant-points-38-gray.png">
                        </div>
                        <div>
                            <p>Ver variantes</p>
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
    loadingContent();
    content.innerHTML = data;
}
