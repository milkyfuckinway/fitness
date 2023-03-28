const videoContainer = document.querySelector('.about__video');
const playButton = videoContainer.querySelector('[data-preview-button]');
const previewImage = videoContainer.querySelector('img');
const video = videoContainer.querySelector('iframe');
const videoLink = videoContainer.getAttribute('data-src');

videoContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('[data-preview-button]')) {
    playButton.remove();
    videoContainer.classList.add('is-active');
    previewImage.remove();
    video.src = videoLink;
  }
});
