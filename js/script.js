const sliderImages = document.querySelectorAll('.slider-img')
const sliderText = document.querySelectorAll('.slider-text-content')
const btnRight = document.querySelector('.slider-btn-right')
const btnLeft = document.querySelector('.slider-btn-left')

const nextSlide = () => {
  const currentSlideImg = document.querySelector('.active-photo')
  const currentSlideText = document.querySelector('.active-text')
  currentSlideText.classList.remove('active-text')
  currentSlideImg.classList.remove('active-photo')

  if (
    currentSlideImg.nextElementSibling &&
    currentSlideImg.nextElementSibling.classList.contains('slider-img')
  ) {
    currentSlideImg.nextElementSibling.classList.add('active-photo')
    currentSlideText.nextElementSibling.classList.add('active-text')
  } else {
    sliderImages[0].classList.add('active-photo')
    sliderText[0].classList.add('active-text')
  }
}

const prevSlide = () => {
  const currentSlideImg = document.querySelector('.active-photo')
  const currentSlideText = document.querySelector('.active-text')
  currentSlideText.classList.remove('active-text')
  currentSlideImg.classList.remove('active-photo')

  if (
    currentSlideImg.previousElementSibling &&
    currentSlideImg.previousElementSibling.classList.contains('slider-img')
  ) {
    currentSlideImg.previousElementSibling.classList.add('active-photo')
    currentSlideText.previousElementSibling.classList.add('active-text')
  } else {
    sliderImages[sliderImages.length - 1].classList.add('active-photo')
    sliderText[sliderText.length - 1].classList.add('active-text')
  }
}

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)

const navOpen = document.querySelector('.nav-open')
const navClose = document.querySelector('.nav-close')
const navLinks = document.querySelector('.nav-links')

navOpen.addEventListener('click', () => {
  navLinks.classList.add('active')
})

navClose.addEventListener('click', () => {
  navLinks.classList.remove('active')
})
