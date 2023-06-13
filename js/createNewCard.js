import { similarPosters } from './data.js';
//import './data.js'
//import { similarPosters } from './data.js';

const template = document.querySelector('#card').content;
const newCard = template.querySelector('.popup');
const map = document.querySelector('#map-canvas');

for(let i=0; i < similarPosters.length; i++){
    const similarCard = newCard.cloneNode(true);

    const cardTitle = similarPosters[i].offer.title;
    const similarCardTitle = similarCard.querySelector('.popup__title');
    similarCardTitle.textContent = cardTitle;

   // const cardAddress = similarPosters[i].location.x + ',' + similarPosters[i].location.y;
   // const similarCardAddress = similarCard.querySelector('.popup__text--addres')
   // similarCardAddress.textContent = cardAddress;
    const cardPrice = similarPosters[i].offer.price;
    const similarCardPrice = similarCard.querySelector('.popup__text--price');
    similarCardPrice.textContent = cardPrice + '₽/ночь';

    const cardType = similarPosters[i].offer.type;
    const similarCardType = similarCard.querySelector('.popup__type');
    similarCardType.textContent = cardType;

    const cardRoms = similarPosters[i].offer.rooms;
    const cardQuests = similarPosters[i].offer.quests;
    const similarCardRoomsAndQuests = similarCard.querySelector('.popup__text--capacity');
    similarCardRoomsAndQuests.textContent = cardRoms + ' комнаты для ' + cardQuests + ' гостей';

    const cardCheckin = similarPosters[i].offer.chekin;
    const cardCheckout = similarPosters[i].offer.checkout;
    const similarCardTimes = similarCard.querySelector('.popup__text--time');
    similarCardTimes.textContent = 'Заезд после ' + cardCheckin + ', выезд до ' + cardCheckout;


    map.appendChild(similarCard)
}

// Выведите адрес offer.address в блок .popup__text--address.

// В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
// Квартира для flat
// Бунгало для bungalow
// Дом для house
// Дворец для palace


// В список .popup__features выведите все доступные удобства в объявлении.
// В блок .popup__description выведите описание объекта недвижимости offer.description.
// В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как src соответствующего изображения.
// Замените src у аватарки пользователя — изображения, которое записано в .popup__avatar — на значения поля author.avatar отрисовываемого объекта.
// Если данных для заполнения не хватает, соответствующий блок в карточке скрывается.

// Отрисуйте один из сгенерированных DOM-элементов, например первый, в блок #map-canvas, чтобы проверить, что данные в разметку были вставлены корректно.

// Подключите модуль в проект.