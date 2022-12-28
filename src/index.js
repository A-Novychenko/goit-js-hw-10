import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const card = document.querySelector('.country-info');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const inputName = input.value.trim();
  if (!inputName) {
    console.log('ПУСТОЙ');
    list.innerHTML = '';

    return;
  }
  console.log('НЕ ПУСТОЙ');
  fetchCountries(inputName)
    .then(coutries => {
      console.log(coutries);
      if (coutries.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      } else if (coutries.length > 1 && coutries.length < 10) {
        createListCoutriesMurkup(coutries);
      } else {
        createListCoutriesMurkup(coutries);
        createCardCoutryMurkup(coutries);
      }
    })
    .catch();
}

// { countries => {
//   countries.map({
//     name: { official },
//     capital,
//     population,
//     flags: { svg: flagSvg },
//     languages,
//   });
// };}

function createListCoutriesMurkup(coutries) {
  const markup = coutries.map(
    ({ name: { official }, flags: { svg: flagSvg } }) => `<li>
  <img src="${flagSvg}" alt="${official}" width="100">
  <p>${official}</p>
</li>`
  );
  list.innerHTML = markup.join(' ');
}

function createCardCoutryMurkup(coutries) {
  const markup = coutries.map(({ capital, population, languages }) => {
    const langList = Object.values(languages);

    return `<p>${capital}</p>
  <p>${population}</p>
  <p>${langList}</p>`;
  });
  card.innerHTML = markup.join(' ');
}
