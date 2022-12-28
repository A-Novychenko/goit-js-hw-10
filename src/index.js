import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const card = document.querySelector('.country-info');

document.body.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag-map_of_the_world.svg/1920px-Flag-map_of_the_world.svg.png)`;

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const inputName = input.value.trim();
  if (!inputName) {
    clearMarkup();
    document.body.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag-map_of_the_world.svg/1920px-Flag-map_of_the_world.svg.png)`;

    return;
  }

  fetchCountries(inputName)
    .then(countries => {
      document.body.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag-map_of_the_world.svg/1920px-Flag-map_of_the_world.svg.png)`;

      if (countries.length > 10) {
        clearMarkup();
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );

        return;
      } else if (countries.length > 1 && countries.length <= 10) {
        card.innerHTML = '';

        createListcountriesMurkup(countries);
      } else {
        list.innerHTML = '';
        createCardCoutryMurkup(countries);
      }
    })
    .catch(() => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      clearMarkup();
      document.body.style.backgroundImage = `url(https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1672246439~exp=1672247039~hmac=40e8c5bf1f5e1f11c7b8a188661ba7ce89c1d7a27681fa5bed3612be9d1eb9e6)`;
    });
}

function createListcountriesMurkup(countries) {
  const markup = countries.map(
    ({ name: { official }, flags: { svg: flagSvg } }) => `<li>
  <img src="${flagSvg}" alt="${official}" width="100">
  <p>${official}</p>
</li>`
  );

  list.innerHTML = markup.join(' ');
}

function createCardCoutryMurkup(countries) {
  const markup = countries.map(
    ({
      name: { official },
      flags: { svg: flagSvg },
      capital,
      population,
      languages,
    }) => {
      const langList = Object.values(languages);

      document.body.style.backgroundImage = `url(${flagSvg})`;

      return `
     <img src="${flagSvg}" alt="${official}" width="220">
     <div class="wrap">
        <h1>${official}</h1>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Languages: ${langList}</p>
     </div>`;
    }
  );

  card.innerHTML = markup.join(' ');
}

function clearMarkup() {
  list.innerHTML = '';
  card.innerHTML = '';
}
