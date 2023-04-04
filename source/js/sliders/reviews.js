const reviews = document.querySelector('.reviews');

const initReviewsSwiper = () => {
  if (reviews) {
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
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        1200: {
          allowTouchMove: false,
        },
        768: {
          allowTouchMove: true,
        },
      },
    });

    prevButton.ariaLabel = 'Предыдущий слайд.';
    nextButton.ariaLabel = 'Следующий слайд.';

    reviewsSwiper.init();
  }
};
export {initReviewsSwiper};
