import { similarPosters } from './data.js';
//import './data.js'
//import { similarPosters } from './data.js';

const template = document.querySelector('#card').content;
const newCard = template.querySelector('.popup');
const map = document.querySelector('#map-canvas');
const similarCard = newCard.cloneNode(true);

for(let i=0; i < similarPosters.length; i++){
  const currentPoster = similarPosters[i];

  const cardTitle = currentPoster.offer.title;
  const similarCardTitle = similarCard.querySelector('.popup__title');
  similarCardTitle.textContent = cardTitle;

  const cardAddress = currentPoster.offer.address.x + ',' + currentPoster.offer.address.y;
  const similarCardAddress = similarCard.querySelector('.popup__text--address')
  similarCardAddress.textContent = cardAddress;

  const cardPrice = currentPoster.offer.price;
  const similarCardPrice = similarCard.querySelector('.popup__text--price');
  similarCardPrice.textContent = cardPrice + '₽/ночь';

  const cardType = currentPoster.offer.type;
  const similarCardType = similarCard.querySelector('.popup__type');
  similarCardType.textContent = cardType;

  const cardRoms = currentPoster.offer.rooms;
  const cardQuests = currentPoster.offer.quests;
  const similarCardRoomsAndQuests = similarCard.querySelector('.popup__text--capacity');
  similarCardRoomsAndQuests.textContent = cardRoms + ' комнаты для ' + cardQuests + ' гостей';

  const cardCheckin = currentPoster.offer.chekin;
  const cardCheckout = currentPoster.offer.checkout;
  const similarCardTimes = similarCard.querySelector('.popup__text--time');
  similarCardTimes.textContent = 'Заезд после ' + cardCheckin + ', выезд до ' + cardCheckout;

  const cardFeatures = currentPoster.offer.features;
  const similarCardFeatures = similarCard.querySelector('.popup__features');
  similarCardFeatures.textContent = cardFeatures;

  const cardDescription = currentPoster.offer.description;
  const similarCardDescription = similarCard.querySelector('.popup__description');
  similarCardDescription.textContent = cardDescription;




//?????????????????????????
//   const cardPhoto = currentPoster.offer.photos;
//   const similarCardPhotos = similarCard.querySelector('.popup__photos');
//   const photo = similarCard.querySelector('.popup__photo');
  
//   for(let j=0;j<cardPhoto.length;j++){
//     const ph = photo.cloneNode(true);
//     photo.remove();
//     ph.classList.add(j);
//     ph.src=cardPhoto[j];
//     similarCardPhotos.appendChild(ph);
//   }  
// console.log(cardPhoto.length)





  const cardAvatar = currentPoster.author.avatar;
  const similarCardAvatar = similarCard.querySelector('.popup__avatar');
  similarCardAvatar.src = cardAvatar;


}
map.appendChild(similarCard)
