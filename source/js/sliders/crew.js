const nextButton = document.querySelector('.swiper-button--next');
const prevButton = document.querySelector('.swiper-button--prev');

const crewSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
});

prevButton.ariaLabel = 'Предыдущий слайд.';
nextButton.ariaLabel = 'Следующий слайд.';

export {crewSwiper};
