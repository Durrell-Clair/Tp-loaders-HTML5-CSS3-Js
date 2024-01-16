// Script permettant de d'ajouter un loader au chargement d'une page

// Récupération de notre element de classe loaderFinal
const loader = document.querySelector('.loaderFinal');
// ajout de la classe hidden à notre element loaderFinal au chargement de la page 
window.addEventListener('load', function(){
    loader.classList += " hidden";
})