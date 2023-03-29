function ytdeferSetup() {
  let d = document;
  let els = d.getElementsByClassName('ytdefer');
  for (let i = 0; i < els.length; i++) {
    let e = els[i];
    let dv = d.createElement('div');
    dv.id = 'ytdefer_vid' + i;
    dv.style.position = 'relative';
    e.appendChild(dv);
    let image = d.createElement('img');
    image.id = 'ytdefer_img' + i;
    image.onclick = genYtdeferClk(i);
    dv.appendChild(image);
    let button = d.createElement('button');
    button.id = 'ytdefer_icon' + i;
    button.setAttribute('aria-label', 'Воспроизвести.');
    dv.appendChild(button);
  }

  if (typeof YT === 'undefined') {
    let js = d.createElement('script');
    js.type = 'text/javascript';
    js.src = 'https://www.youtube.com/player_api';
    d.body.appendChild(js);
  }
}

function genYtdeferClk(i) {
  return function () {
    let d = document;
    let el = d.getElementById('ytdefer_vid' + i);
    let vidId = el.parentNode.getAttribute('data-src');
    // eslint-disable-next-line no-undef, no-unused-vars
    let player = new YT.Player(el.id, {
      videoId: vidId,
      events: {
        onReady(ev) {
          ev.target.playVideo();
        },
      },
    });
  };
}

const ytdeferInit = () => {
  ytdeferSetup();
};

export {ytdeferInit};
