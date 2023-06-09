const crew = document.querySelector('.crew');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    if (item.isIntersecting) {
      item.target.tabIndex = '0';
    } else {
      item.target.tabIndex = '-1';
    }
  });
});

const initCrewSwiper = () => {
  if (crew) {
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
      keyboard: {
        enabled: true,
      },
      slidesPerView: 1,
      breakpoints: {
        1320: {
          slidesPerView: 4,
          spaceBetween: 40,
          allowTouchMove: false,
        },
        1200: {
          slidesPerView: 3,
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

    crewSwiper.init();

    const crewSlides = Array.from(crew.querySelector('.swiper-wrapper').children);

    const setTabIndex = () => {
      crewSlides.forEach((item) => {
        observer.observe(item);
      });
    };
    setTabIndex();
  }
};

export {initCrewSwiper};
