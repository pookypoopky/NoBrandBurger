const slide = document.querySelector('.slides')
const images = document.querySelectorAll('.slides img')
let count = 0;
const slideCount = images.length // 이미지 갯수
const slideWidth = 204.797 // 이미지 너비
const slideMargin = 120 // 이미지 외부 여백
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

makeClone();

function makeClone() {
  for (let i = 0; i<slideCount; i++) {
    const cloneSlide = images[i].cloneNode();
    cloneSlide.classList.add('clone');
    slide.appendChild(cloneSlide); 
  }
  for (let i = slideCount -1; i>=0; i--) {
    const cloneSlide = images[i].cloneNode();
    cloneSlide.classList.add('clone');
    slide.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();

  setTimeout(() => {
    slide.classList.add('animated');
  }, 100);
}

function updateWidth() {
  const currentSlides = document.querySelectorAll('.slides img');
  const newSlideCount = currentSlides.length;

  const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
  slide.style.width = newWidth;
}
function setInitialPos() {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slide.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}

// // BUTTON CLICK EVENT

// nextBtn.addEventListener('click', () => {
//   moveSlide(count + 1);
// });
// prevBtn.addEventListener('click', () => {
//   moveSlide(count - 1);
// });

function moveSlide(num){
  slide.style.left = -num * (slideWidth + slideMargin) + 'px';
  count = num;
  console.log(count, slideCount);
  if(count == slideCount || count == -slideCount) {
    setTimeout(() => {
      slide.classList.remove('animated');
      slide.style.left = '0px';
      count = 0;
    }, 500);
    setTimeout(() => {
      slide.classList.add('animated');
    }, 600);
  }
}

const timer = undefined;
function autoSlide(){
  if(timer == undefined){
    timer = setInterval(() => {
      moveSlide(count + 1);
    }, 1500);
  }
}
autoSlide();

// function stopSlide(){
//   clearInterval(timer);
//   timer = undefined;
//   console.log(timer);
// }


// MOUSE EVENT

// slide.addEventListener('mouseenter', () => {
//   stopSlide();
// });
// slide.addEventListener('mouseleave', () => {
//   autoSlide();
// });