const BottomSlider = document.querySelector('#wrapperBoxes');
var isScroll = false, left, posInitial, posX, scroll;

BottomSlider.addEventListener('mousedown', (e) => {
  isScroll = true;
  posInitial = e.pageX - BottomSlider.offsetLeft;
  left = BottomSlider.scrollLeft;
});
BottomSlider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if (isScroll) {
    posX = e.pageX - BottomSlider.offsetLeft;
    scroll = posX - posInitial;
    BottomSlider.scrollLeft = left - scroll;
  }
});
BottomSlider.addEventListener('mouseup', (e) => {
  isScroll = false;
});

