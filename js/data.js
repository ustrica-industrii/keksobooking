import {AVATARS, TITLES, TYPES, TIMES_CHECKIN, TIMES_CHECKOUT, FEATURES, DESCRIPTIONS, PHOTOS, SIMILAR_AD_COUNT} from './arrays.js';
import {GET_RANDOM_NUMBER, GET_RANDOM_COORDINATE, getRandonArrayElement, getRandonFeatures} from './util.js';


const createAutor = () => {
  const mixAvatars = [];

  for(let i = 0; i <= AVATARS.length-1; i++){
    const avaRand = Math.floor(Math.random() * AVATARS.length);
    mixAvatars[i] = AVATARS[avaRand];
    AVATARS.splice(avaRand,1);

    return{
      avatar: mixAvatars[i],
    }
  }
}


const createOffer = () => {
  return {
    title: getRandonArrayElement(TITLES),
    address: createLocation(),
    price: GET_RANDOM_NUMBER(0,100000),
    type: getRandonArrayElement(TYPES),
    rooms: GET_RANDOM_NUMBER(0,100),
    quests: GET_RANDOM_NUMBER(0,100),
    chekin: getRandonArrayElement(TIMES_CHECKIN),
    checkout: getRandonArrayElement(TIMES_CHECKOUT),
    features: getRandonFeatures(FEATURES),
    description: getRandonArrayElement(DESCRIPTIONS),
    photos: new Array(GET_RANDOM_NUMBER(0,PHOTOS.length-1)).fill(null).map(() => getRandonArrayElement(PHOTOS)),
  }
};


const createLocation = () => {
  return{
    x: GET_RANDOM_COORDINATE(35.65000,35.70000,5),
    y: GET_RANDOM_COORDINATE(139.70000,139.80000,5),
  }
};


const createAd = () => {
  return {
    author: createAutor(),
    offer: createOffer(),
    location: createLocation(),
  };
};

const createSimilarAd = () => {
  //создаем пустой массив заданной из переменной длинны, заполняем сгенерерованными объектами
  const similarAd = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());
  return similarAd;
}

export {createSimilarAd};
