/*переменные и константы*/
let positionTwo = 0;
const Slidershow = 2;
const Sliderscroll = 1;
const containerTwo = document.querySelector(`.reviews__slider-js-container`);
const trackTwo = document.querySelector(`.reviews__slider-js`); // div  слайдеров
/*const item = document.querySelector(`.slider__item`);*/
const btnprevTwo = document.querySelector(`.slaider-btn-rev--js-prev`);
const btnnextTwo = document.querySelector(`.slaider-btn-rev--js-next`);
const itemsTwo = document.querySelectorAll(`.reviews__slider-js-item`); //Cлайды (картинки)
const itemscountTwo = itemsTwo.length;
const itemwith = containerTwo.clientWidth / Slidershow;
const movepositionTwo = Sliderscroll * itemwith;

loop: true,

itemsTwo.forEach((item) => {
    item.style.minWidth = `${itemwith}px`; /*ширина элементов*/
})

btnnextTwo.addEventListener(`click`, () => {
    const itemsleftTwo = itemscountTwo - (Math.abs(positionTwo) + Slidershow * itemwith) / itemwith;
    positionTwo -= itemsleftTwo >= Sliderscroll ? movepositionTwo : itemsleftTwo * itemwith;
    setpositionTwo();
    checkbtnsTwo();
})

btnprevTwo.addEventListener(`click`, () => {
    const itemsleftTwo = Math.abs(positionTwo) / itemwith;
    positionTwo += itemsleftTwo >= Sliderscroll ? movepositionTwo : itemsleftTwo * itemwith;
    setpositionTwo();
    checkbtnsTwo();
})

const setpositionTwo = () => {
    trackTwo.style.transform = `translatex(${positionTwo}px)`
};

const checkbtnsTwo = () => {
    btnprevTwo.disabled = positionTwo === 0;
    btnnextTwo.disabled = positionTwo <= - (itemscountTwo - Slidershow) * itemwith
};