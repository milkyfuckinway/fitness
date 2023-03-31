const nextButton = document.querySelector('.swiper-button--next');
const prevButton = document.querySelector('.swiper-button--prev');

const crewSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

prevButton.ariaLabel = 'Предыдущий слайд.';
nextButton.ariaLabel = 'Следующий слайд.';

export {crewSwiper};
