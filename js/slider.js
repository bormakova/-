let position = 0;
const SliderShow = 1;
const SliderScroll = 1;
const container = document.querySelector(`.portfolio__slaider--container-js`);
const track = document.querySelector(`.portfolio__slaider--js`);
const BtnPrev = document.querySelector(`.slaider-btn--js-prev`);
const BtnNext = document.querySelector(`.slaider-btn--js-next`);
const items = document.querySelector(`.portfolio__slaider--js-item`);
const itemCount = items.length;
const itemWidth = container.clientWidth / SliderShow;
const movePosition = SliderScroll * itemWidth;

loop: true;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
})

BtnNext.addEventListener(`click`, () => {
    const itemsDown = itemCount - (Math.abs(position) + SliderShow * itemWidth) / itemWidth;
    position -= itemsDown >= SliderScroll ? movePosition : itemsDown * itemWidth;
    setPosition();
    checkbtns();
})

BtnPrev.addEventListener(`click`, () => {
    const itemsDown = Math.abs(position) / itemWidth;
    position += itemsleft >= SliderScroll ? movePosition : itemsDown * itemWidth;
    setPosition ();
    checkbtns();
})

const setPosition = () => {
    track.style.transform = `translatex(${position}px)`
};

const checkbtns = () => {
    BtnPrev.disabled = position === 0;
    BtnNext.disabled = position <= - (itemCount - SliderShow) * itemWidth
};
