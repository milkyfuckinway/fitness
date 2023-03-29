function ytdeferSetup() {
  const ytdeferElements = document.querySelectorAll('.ytdefer');
  ytdeferElements.forEach((ytdeferElement, index) => {
    const divElement = createDivElement(index);
    ytdeferElement.appendChild(divElement);
    const buttonElement = createButtonElement(index);
    buttonElement.addEventListener('click', genYtdeferClk(index));
    divElement.appendChild(buttonElement);
  });

  if (typeof YT === 'undefined') {
    loadYouTubePlayerAPI();
  }
}

function createDivElement(index) {
  const divElement = document.createElement('div');
  divElement.id = `ytdefer_vid${index}`;
  divElement.style.position = 'relative';
  return divElement;
}

function createButtonElement(index) {
  const buttonElement = document.createElement('button');
  buttonElement.id = `ytdefer_icon${index}`;
  buttonElement.setAttribute('aria-label', 'Воспроизвести.');
  return buttonElement;
}

function loadYouTubePlayerAPI() {
  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.src = 'https://www.youtube.com/player_api';
  document.body.appendChild(scriptElement);
}

const genYtdeferClk = (index) => () => {
  const videoDivElement = document.querySelector(`#ytdefer_vid${index}`);
  const videoId = videoDivElement.parentNode.getAttribute('data-src');
  const player = new YT.Player(videoDivElement.id, {
    videoId,
    playerVars: {
      'autoplay': 1,
      'playsinline': 1
    },
    events: {
      onReady(event) {
        event.target.playVideo();
        event.target.mute();
      },
    },
  });
};

const ytdeferInit = () => {
  ytdeferSetup();
};

export {ytdeferInit};
