const showContentButton = document.getElementById("showContentButton");
const hiddenContent = document.getElementById("hiddenContent");
const arrow = document.getElementById("arrow");
const hiddenElement = document.getElementById('hidden');
const changeprop = document.getElementById('showContentButton');
const arrowElement = document.getElementById('arrow');

showContentButton.addEventListener("click", () => {
    hiddenContent.style.display = "block";
    setTimeout(() => {
        hiddenContent.style.opacity = "1";
        hiddenContent.style.transform = "translateY(0)";
    }, 10);
});
let contentVisible = false;
let count = 0;
showContentButton.addEventListener("click", () => {
    if (!contentVisible) {
        hiddenContent.style.display = "block";
        setTimeout(() => {
            hiddenContent.style.opacity = "1";
            hiddenContent.style.transition = "opacity 0.5s ease-in, transform 0.5s ease-in";
            hiddenContent.style.transform = "translateY(0)";
        }, 10);
        setTimeout(() => {
            hiddenContent.scrollIntoView({ behavior: 'smooth' });
        }, 100); 

        changeprop.style.marginBottom = '-30px'

        arrowElement.innerHTML = 'For less <br> about me';
    } else {
        
        hiddenContent.style.display = "block";
        setTimeout(() => {
            hiddenContent.style.opacity = "0";
            hiddenContent.style.transition = "opacity 0.2s ease-in, transform 0.2s ease-in";
            hiddenContent.style.transform = "translateY(-10px)";
        }, 10);
        setTimeout(() => {
            hiddenContent.style.display = "none";
            hiddenContent.style.transition = ""; 
        }, 100); 
        changeprop.style.marginTop = '222%'
        changeprop.style.marginBottom = '0px'
        arrowElement.innerHTML = 'For more <br> about me';


    }
    contentVisible = !contentVisible;
});
