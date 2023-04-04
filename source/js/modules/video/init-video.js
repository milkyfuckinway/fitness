const videoContainer = document.querySelectorAll('.video');

const initVideo = () => {
  if (videoContainer.length > 0) {
    videoContainer.forEach((item) => {
      const preview = item.querySelector('.video__preview');
      const button = item.querySelector('.video__button');
      const iframe = item.querySelector('iframe');

      button.addEventListener('click', () => {
        preview.remove();
        button.remove();
        const originalSrc = item.getAttribute('data-src');
        iframe.src = `${originalSrc}?autoplay=1&mute=1`;
      });
    });
  }
};
export {initVideo};
