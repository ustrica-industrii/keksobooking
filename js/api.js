import {showAlert} from './util.js';
//import {renderMarker} from './map.js';

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
  //fetch('https://22.javascript.pages.academy/404')

    .then((responce) => responce.json())
    .then((cards) => {
      onSuccess(cards);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные, попробуйте позже');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://23.javascript.pages.academy/keksobooking',
  //fetch('https://22.javascript.pages.academy/404',
    {
      method: 'POST',
      body,
    },
  )
    .then ((responce) => {
      if(responce.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    })
};

export {getData, sendData};
