import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  fetchCountries(input.value)
    .then(data => console.log(data))
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
