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
    
    const AVATARS = [
    'img/avatars/user01.png',
    'img/avatars/user02.png',
    'img/avatars/user03.png',
    'img/avatars/user04.png',
    'img/avatars/user05.png',
    'img/avatars/user06.png',
    'img/avatars/user07.png',
    'img/avatars/user08.png',
    ]
    
    const TITLES = [
    'жилье номер один',
    'жилье номер два',
    'жилье номер три',
    'жилье номер четыре',
    'жилье номер пять',
    'жилье номер шесть',
    'жилье номер семь',
    'жилье номер восмь',
    'жилье номер девять',
    'жилье номер десять',
    ];
    
    const TYPES = [
    'palace',
    'flat',
    'house',
    'bungalow',
    ];
    
    const TIMES_CHECKIN = [
    '12:00',
    '13:00',
    '14:00',
    ];
    
    const TIMES_CHECKOUT = [
    '12:00',
    '13:00',
    '14:00',
    ];
    
    const FEATURES = [
    'wifi',
    'dishwaser',
    'parking',
    'washer',
    'elevetor',
    'conditioner',
    ];
    
    
    const DESCRIPTIONS = [
    'описание номер 1',
    'описание номер 2',
    'описание номер 3',
    'описание номер 4',
    'описание номер 5',
    'описание номер 6',
    'описание номер 7',
    'описание номер 8',
    'описание номер 9',
    'описание номер 10',
    ];
    
    const PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
    ]
    //Количество создаваемых объектов
    const SIMILAR_AD_COUNT = 8;
    
    const getRandonArrayElement = (elements) => {
    return elements[GET_RANDOM_NUMBER(0,elements.length-1)];
    };
    
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
    
    
    const getArray= (features) => {
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
    features: getArray(FEATURES),
    description: getRandonArrayElement(DESCRIPTIONS),
    photos: new Array(GET_RANDOM_NUMBER(0,PHOTOS.length-1)).fill(null).map(() => getRandonArrayElement(PHOTOS)),
    }
    };
    
    const createLocation = () => {
    return{
    x: GET_RANDOM_COORDINATE(35.65000,35.70000,5),
    y: GET_RANDOM_COORDINATE(139.70000,139.80000,5),
    }
    }
    
    const createAd = () => {
    return {
    author: createAutor(),
    offer: createOffer(),
    location: createLocation(),
    };
    };
    //создаем пустой массив заданной из переменной длинны, заполняем сгенерерованными объектами
    const similarAd = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());
    similarAd
    