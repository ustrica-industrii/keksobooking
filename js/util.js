const ALERT_SHOW_TIME = 5000;


const getRandomNumber = (min,max) => {
  if(min >= max){
    alert('Минимальное значение больше максимального или равняется ему.');
  }else if(min >= 0){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }else{
    alert('Допускается использование только положительных чисел.');
  }
}

const getRandomCoordinate = (min,max,PointNumber) => {
  if(min >= max){
    alert('Минимальное значение больше максимального или равняется ему.');
  }else if(min >= 0){
    let number = Math.random() * (max - min ) + min;
    return number.toFixed(PointNumber)
  }else{
    alert('Допускается использование только положительных чисел.');
  }
}

const getRandonArrayElement = (elements) => {
  return elements[getRandomNumber(0,elements.length - 1)];
};

const getRandonFeatures= (features) => {
  const maxLength = features.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  for(let i = 0; i < lengthOfArray; i++) {
    const randomIndex = getRandomNumber(0, maxLength - 1);
    const randomFeature = features[randomIndex];

    if (!array.includes(randomFeature)) {
      array.push(randomFeature);
    }
  }
  return array;
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}


export {getRandomNumber, getRandomCoordinate, getRandonArrayElement, getRandonFeatures, showAlert};
