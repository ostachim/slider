const slideList = [{
    img:"img/img1.jpg",
    txt:"Pierwszy tekst",
},{
    img:"img/img2.jpg",
    txt:"Drugi tekst",
},{
    img:"img/img3.jpg",
    txt:"Trzeci tekst",
}];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
//zmiana slajdu
const time = 1000;
let active = 0;
const dots = [...document.querySelectorAll('.dots span')];

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"))
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active");
}

const  changeSlide = () => {
    active++;
    if(active == slideList.length){
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].txt;
    changeDot();
}

let indexInterval = setInterval(changeSlide,time);

const keyChangeSlide = (e) => {
    if(e.keyCode == 39 || e.keyCode == 37){
        clearInterval(indexInterval);
        e.keyCode == 37 ? active--:active++;
        if(active === slideList.length){
            active = 0;
        }
        else if(active < 0){
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].txt;
        changeDot();
        indexInterval = setInterval(changeSlide,time);
        
    }
}
 





window.addEventListener("keydown",keyChangeSlide);




