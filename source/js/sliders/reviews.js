const reviews = document.querySelector('.reviews');
const reviewsSwiperContainer = reviews.querySelector('.swiper');
const nextButton = reviews.querySelector('.swiper-button--next');
const prevButton = reviews.querySelector('.swiper-button--prev');

const reviewsSwiper = new Swiper(reviewsSwiperContainer, {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
  autoplay: {
    delay: 500,
  },
  slidesPerView: 1,
});

prevButton.ariaLabel = 'Предыдущий слайд.';
nextButton.ariaLabel = 'Следующий слайд.';

export {reviewsSwiper};
