
function rolagem() {
    setTimeout(function(){
        window.scrollTo({
            top: document.querySelector(".segundoBloco").offsetTop,
            behavior: "smooth"
        });
    }, 3000);
}

rolagem();