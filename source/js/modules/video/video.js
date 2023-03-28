const initVideo = () => {
  const videoContainers = document.querySelectorAll('.about__video');
  if (videoContainers.length > 0) {
    videoContainers.forEach((videoContainer) => {
      const playButton = videoContainer.querySelector('[data-preview-button]');
      const previewImage = videoContainer.querySelector('img');
      const video = videoContainer.querySelector('iframe');
      const videoLink = video.dataset.src;

      const onVideoLoad = () => {
        video.removeEventListener('load', onVideoLoad);
        if (playButton) {
          playButton.remove();
        }
        videoContainer.classList.add('is-active');
        if (previewImage) {
          previewImage.remove();
        }
      };

      videoContainer.addEventListener('click', (evt) => {
        if (evt.target.closest('[data-preview-button]')) {
          if (video) {
            if (window.innerWidth > 1199) {
              video.src = videoLink;
            } else {
              video.src = `${videoLink}&mute=1`;
            }
          }
          video.addEventListener('load', onVideoLoad);
        }
      });
    });
  }
};

export {initVideo};
