const formDescription = document.querySelector('.ad-form');
const formFilters = document.querySelector('.map__filters');

const addDisadledStatus = (formName) => {
  formName.classList.add('ad-form--disabled');
  const formChildren = formName.children;
  for(let i = 0; i < formChildren.length; i++){
    formChildren[i].disabled = true;
  }
};

const addEnabledStatus = (formName) => {
  formName.classList.remove('ad-form--disabled');
  const formChildren = formName.children;
  for(let i = 0; i < formChildren.length; i++){
    formChildren[i].disabled = false;
  }
};

addDisadledStatus(formDescription);
addDisadledStatus(formFilters);


export {formDescription, formFilters, addEnabledStatus}
