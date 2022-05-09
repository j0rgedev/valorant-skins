document.querySelector(".main_btn").onclick = () => {
    document.location.href = '#features_section';
}

document.addEventListener('DOMContentLoaded',()=>{
    sessionStorage.removeItem('weapon-name');
    sessionStorage.removeItem('bundle-name');
})


