const baseSuccessCallback = (event) => {
  event.preventDefault();
  const form = document.querySelector('form');
  const data = new FormData(form);
  const url = 'https://echo.htmlacademy.ru';

  fetch(url, {
    method: 'POST',
    body: data,
  }).then((response) => {
    if (response.ok) {
      const entries = Array.from(data.entries());
      const modal = document.createElement('div');
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Форма успешно отправлена';
      modal.appendChild(successMessage);
      const dataMessage = document.createElement('p');
      dataMessage.textContent = 'Вот данные которые были отправленны';
      modal.appendChild(dataMessage);
      entries.forEach((entry) => {
        const p = document.createElement('p');
        p.textContent = `${entry[0]}: ${entry[1]}`;
        modal.appendChild(p);
      });
      const button = document.createElement('button');
      button.style.backgroundColor = 'transparent';
      button.style.cursor = 'pointer';
      button.textContent = 'Закрыть';
      button.addEventListener('click', () => {
        modal.remove();
      });
      modal.appendChild(button);
      modal.style.position = 'fixed';
      modal.style.top = '50%';
      modal.style.left = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
      modal.style.backgroundColor = 'white';
      modal.style.padding = '40px';
      modal.style.borderRadius = '10px';
      modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
      document.body.appendChild(modal);
    } else {
      // eslint-disable-next-line no-alert
      alert('Ошибка при отправке формы');
    }
  });
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
