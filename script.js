let btnPrev = document.querySelector(".btn-prev");
let btnNext = document.querySelector(".btn-next");
let slider = document.querySelectorAll(".completed-projects__slider__element");
let pagination = document.querySelectorAll(".completed-projects__info__pagination__circles__circle");
let variants = document.querySelectorAll(".completed-projects__variants__variant");
let actualPosition = 0;


window.onload = () =>{
    goToActualPosition();
}


btnPrev.addEventListener("click", (e)=>{
    actualPosition+=100;
    if (actualPosition == 100){
        actualPosition = -(pagination.length-1)*100;

    }
    goToActualPosition();
});
btnNext.addEventListener("click", (e)=>{
    actualPosition-=100;
    if (actualPosition == -pagination.length*100){
        actualPosition = 0;
    }
    goToActualPosition();
});


function changeActualElement(number){
    for(let elem of pagination){
        elem.classList.remove("completed-projects__info__pagination__circles__circle_on");
    }
    for(let elem of variants){
        elem.classList.remove("title-text");
        elem.classList.remove("title-text_underline");
    }
    pagination[number].classList.add("completed-projects__info__pagination__circles__circle_on");
    variants[number].classList.add("title-text");
    variants[number].classList.add("title-text_underline");
}

function goToActualPosition(){
    for(let elem of slider){
        elem.style.left = `${actualPosition}%`;
    }
    changeActualElement(Math.abs(Math.floor(actualPosition / 100)));
}


function openVariant(number){
    actualPosition = -100 * Number(number);
    goToActualPosition();
    
}