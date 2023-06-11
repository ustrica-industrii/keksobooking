import {AVATARS, TITLES, TYPES, TIMES_CHECKIN, TIMES_CHECKOUT, FEATURES, DESCRIPTIONS, PHOTOS, SIMILAR_AD_COUNT} from './arrays.js';
import {getRandomNumber, getRandomCoordinate, getRandonArrayElement, getRandonFeatures} from './util.js';


const createAutor = () => {
  const mixAvatars = [];

  for(let i = 0; i <= AVATARS.length-1; i++){
    const avaRandom = Math.floor(Math.random() * AVATARS.length);
    mixAvatars[i] = AVATARS[avaRandom];
    AVATARS.splice(avaRandom,1);

    return{
      avatar: mixAvatars[i],
    }
  }
}


const createOffer = () => {
  return {
    title: getRandonArrayElement(TITLES),
    address: createLocation(),
    price: getRandomNumber(0,100000),
    type: getRandonArrayElement(TYPES),
    rooms: getRandomNumber(0,100),
    quests: getRandomNumber(0,100),
    chekin: getRandonArrayElement(TIMES_CHECKIN),
    checkout: getRandonArrayElement(TIMES_CHECKOUT),
    features: getRandonFeatures(FEATURES),
    description: getRandonArrayElement(DESCRIPTIONS),
    photos: new Array(getRandomNumber(0,PHOTOS.length-1)).fill(null).map(() => getRandonArrayElement(PHOTOS)),
  }
};


const createLocation = () => {
  return{
    x: getRandomCoordinate(35.65000,35.70000,5),
    y: getRandomCoordinate(139.70000,139.80000,5),
  }
};


const createPoster = () => {
  return {
    author: createAutor(),
    offer: createOffer(),
    location: createLocation(),
  };
};

const createSimilarPoster = () => {
  //создаем пустой массив заданной из переменной длинны, заполняем сгенерерованными объектами
  const similarPoster = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createPoster());
  return similarPoster;
}

export {createSimilarPoster};
