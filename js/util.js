const GET_RANDOM_NUMBER = (min,max) => {
  if(min>=max){
    alert('Минимальное значение больше максимального или равняется ему.');
  }else if(min>=0){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }else{
    alert('Допускается использование только положительных чисел.');
  }
}

const GET_RANDOM_COORDINATE = (min,max,PointNumber) => {
  if(min>=max){
    alert('Минимальное значение больше максимального или равняется ему.');
  }else if(min>=0){
    let number = Math.random() * (max - min ) + min;
    return number.toFixed(PointNumber)
  }else{
    alert('Допускается использование только положительных чисел.');
  }
}

const getRandonArrayElement = (elements) => {
  return elements[GET_RANDOM_NUMBER(0,elements.length-1)];
};

const getRandonFeatures= (features) => {
  const maxLength = features.length;
  const lengthOfArray = GET_RANDOM_NUMBER(1, maxLength);
  const array = [];

  for(let i = 0; i < lengthOfArray; i++) {
    const indexOfEl = GET_RANDOM_NUMBER(0, maxLength-1);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

export {GET_RANDOM_NUMBER, GET_RANDOM_COORDINATE, getRandonArrayElement, getRandonFeatures};
