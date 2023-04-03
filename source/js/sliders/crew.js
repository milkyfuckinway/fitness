const crew = document.querySelector('.crew');
const crewSwiperContainer = crew.querySelector('.swiper');
const nextButton = crew.querySelector('.swiper-button--next');
const prevButton = crew.querySelector('.swiper-button--prev');

const crewSwiper = new Swiper(crewSwiperContainer, {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      allowTouchMove: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      allowTouchMove: true,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

prevButton.ariaLabel = 'Предыдущий слайд.';
nextButton.ariaLabel = 'Следующий слайд.';

export {crewSwiper};
