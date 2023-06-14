import { similarPosters } from './data.js';

const template = document.querySelector('#card').content;
const newCard = template.querySelector('.popup');
const map = document.querySelector('#map-canvas');


for(let j = 0;j < similarPosters.length; j++){
  const cloneCard = newCard.cloneNode(true);
  const cardTitle = similarPosters[j].offer.title;
  const cloneCardTitle = cloneCard.querySelector('.popup__title');
  cloneCardTitle.textContent = cardTitle;

  const cardAddress = similarPosters[j].offer.address.x + ',' + similarPosters[0].offer.address.y;
  const cloneCardAddress = cloneCard.querySelector('.popup__text--address')
  cloneCardAddress.textContent = cardAddress;

  const cardPrice = similarPosters[j].offer.price;
  const cloneCardPrice = cloneCard.querySelector('.popup__text--price');
  cloneCardPrice.textContent = cardPrice + '₽/ночь';

  const cardType =  similarPosters[j].offer.type;
  const cloneCardType = cloneCard.querySelector('.popup__type');
  cloneCardType.textContent = cardType;

  const cardRoms = similarPosters[j].offer.rooms;
  const cardQuests = similarPosters[j].offer.quests;
  const cloneCardRoomsAndQuests = cloneCard.querySelector('.popup__text--capacity');
  cloneCardRoomsAndQuests.textContent = cardRoms + ' комнаты для ' + cardQuests + ' гостей';

  const cardCheckin = similarPosters[j].offer.chekin;
  const cardCheckout = similarPosters[j].offer.checkout;
  const cloneCardTimes = cloneCard.querySelector('.popup__text--time');
  cloneCardTimes.textContent = 'Заезд после ' + cardCheckin + ', выезд до ' + cardCheckout;

  const cardFeatures = similarPosters[j].offer.features;
  const cloneCardFeatures = cloneCard.querySelector('.popup__features');
  cloneCardFeatures.textContent = cardFeatures;

  const cardDescription = similarPosters[j].offer.description;
  const cloneCardDescription = cloneCard.querySelector('.popup__description');
  cloneCardDescription.textContent = cardDescription;

  const cardAvatar = similarPosters[j].author.avatar;
  const cloneCardAvatar = cloneCard.querySelector('.popup__avatar');
  cloneCardAvatar.src = cardAvatar;

  const cardPhoto = similarPosters[j].offer.photos;
  const cloneCardContainer = cloneCard.querySelector('.popup__photos');
  const photo = cloneCard.querySelector('.popup__photo');
  if(cardPhoto.length === 0){
    cloneCardContainer.remove()
  }
  for(let i=0;i<cardPhoto.length;i++){
    const clonePhoto = photo.cloneNode(true);
    photo.remove()
    clonePhoto.src = cardPhoto[i];
    cloneCardContainer.appendChild(clonePhoto);
  }

  map.appendChild(cloneCard);
}
