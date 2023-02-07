// let position = 0;
// const SliderShow = 1;
// const SliderScroll = 1;
// const container = document.querySelector(`.portfolio__slaider--container-js`);
// const track = document.querySelector(`.portfolio__slaider--js`);
// const BtnPrev = document.querySelector(`.slaider-btn--js-prev`);
// const BtnNext = document.querySelector(`.slaider-btn--js-next`);
// const items = document.querySelector(`.portfolio__slaider--js-item`);
// const itemCount = items.length;
// const itemWidth = container.clientWidth / SliderShow;
// const movePosition = SliderScroll * itemWidth;

// loop: true;

// items.forEach((item) => {
//     item.style.minWidth = `${itemWidth}px`;
// })

// BtnNext.addEventListener(`click`, () => {
//     const itemsDown = itemCount - (Math.abs(position) + SliderShow * itemWidth) / itemWidth;
//     position -= itemsDown >= SliderScroll ? movePosition : itemsDown * itemWidth;
//     setPosition();
//     checkbtns();
// })

// BtnPrev.addEventListener(`click`, () => {
//     const itemsDown = Math.abs(position) / itemWidth;
//     position += itemsleft >= SliderScroll ? movePosition : itemsDown * itemWidth;
//     setPosition ();
//     checkbtns();
// })

// const setPosition = () => {
//     track.style.transform = `translatex(${position}px)`
// };

// const checkbtns = () => {
//     BtnPrev.disabled = position === 0;
//     BtnNext.disabled = position <= - (itemCount - SliderShow) * itemWidth
// };

/*переменные и константы*/
let position =0;
const Slidertoshow = 1;
const Slidertoscroll = 1;
const container = document.querySelector(`.portfolio__slaider--container-js`);
const track = document.querySelector(`.portfolio__slaider--js`); // div  слайдеров
/*const item = document.querySelector(`.slider__item`);*/
const btnprev = document.querySelector(`.slaider-btn--js-prev`);
const btnnext = document.querySelector(`.slaider-btn--js-next`);
const items = document.querySelectorAll(`.portfolio__slaider--js-item`); //Cлайды (картинки)
const itemscount = items.length;
const itemheigth = container.clientHeight / Slidertoshow;
const moveposition = Slidertoscroll * itemheigth;

loop: true,

items.forEach((item) => {
    item.style.minHeigth = `${itemheigth}px`; /*ширина элементов*/
})

btnnext.addEventListener(`click`, () => {
    const itemsleft = itemscount - (Math.abs(position) + Slidertoshow * itemheigth) / itemheigth;
    position -= itemsleft >= Slidertoscroll ? moveposition : itemsleft * itemheigth;
    setposition();
    checkbtns();
})

btnprev.addEventListener(`click`, () => {
    const itemsleft = Math.abs(position) / itemheigth;
    position += itemsleft >= Slidertoscroll ? moveposition : itemsleft * itemheigth;
    setposition();
    checkbtns();
})

const setposition = () => {
    track.style.transform = `translatey(${position}px)`
};

const checkbtns = () => {
    btnprev.disabled = position === 0;
    btnnext.disabled = position <= - (itemscount - Slidertoshow) * itemheigth
};

// /*переменные и константы*/
// let position =0;
// const Slidertoshow = 1;
// const Slidertoscroll = 1;
// const container = document.querySelector(`.portfolio__slaider--container-js`);
// const track = document.querySelector(`.portfolio__slaider--js`); // div  слайдеров
// /*const item = document.querySelector(`.slider__item`);*/
// const btnprev = document.querySelector(`.slaider-btn--js-prev`);
// const btnnext = document.querySelector(`.slaider-btn--js-next`);
// const items = document.querySelectorAll(`.portfolio__slaider--js-item`); //Cлайды (картинки)
// const itemscount = items.length;
// const itemwith = container.clientWidth / Slidertoshow;
// const moveposition = Slidertoscroll * itemwith;

// loop: true,

// items.forEach((item) => {
//     item.style.minWidth = `${itemwith}px`; /*ширина элементов*/
// })

// btnnext.addEventListener(`click`, () => {
//     const itemsleft = itemscount - (Math.abs(position) + Slidertoshow * itemwith) / itemwith;
//     position -= itemsleft >= Slidertoscroll ? moveposition : itemsleft * itemwith;
//     setposition();
//     checkbtns();
// })

// btnprev.addEventListener(`click`, () => {
//     const itemsleft = Math.abs(position) / itemwith;
//     position += itemsleft >= Slidertoscroll ? moveposition : itemsleft * itemwith;
//     setposition();
//     checkbtns();
// })

// const setposition = () => {
//     track.style.transform = `translatex(${position}px)`
// };

// const checkbtns = () => {
//     btnprev.disabled = position === 0;
//     btnnext.disabled = position <= - (itemscount - Slidertoshow) * itemwith
// };