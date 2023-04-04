const videoContainer = document.querySelectorAll('.video');

const initVideo = () => {
  if (videoContainer.length > 0) {
    videoContainer.forEach((item) => {
      const preview = item.querySelector('.video__preview');
      const button = item.querySelector('.video__button');
      button.tabIndex = '0';
      const iframe = item.querySelector('iframe');
      iframe.tabIndex = '-1';

      const playVideo = () => {
        const originalSrc = item.getAttribute('data-src');
        iframe.src = `${originalSrc}?autoplay=1&mute=1`;
        iframe.classList.add('is-active');
        iframe.tabIndex = '0';
        preview.remove();
        button.remove();
      };

      button.addEventListener('click', playVideo);
      button.addEventListener('keydown', (evt) => {
        if (evt.key === 'Enter') {
          playVideo();
        }
      });
    });
  }
};
export {initVideo};
