import './css/styles.css';
import fetchCountries from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var _ = require('lodash');



const DEBOUNCE_DELAY = 300;
const refs = {
  onInput: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
}


refs.onInput.addEventListener('input', _.debounce(onInput,DEBOUNCE_DELAY));

function onInput(evt) {
  const currentCountry = evt.target.value.trim();
  
  fetchCountries(currentCountry).then((contriesArray) => {
  
    if (contriesArray.length > 10) {
      refs.countryList.innerHTML = '';
       refs.countryInfo.innerHTML = '';
       (Notify.info("Too many matches found. Please enter a more specific name."));
    }
    if (contriesArray.length >= 2 && contriesArray.length <= 10) {

      renderCountriesItem(contriesArray);
    }
    if (contriesArray.length === 1) {
  refs.countryList.innerHTML = '';
      renderCountryInfo(contriesArray);
    } 
    
  }).catch((error) => (Notify.failure("Oops, there is no country with that name"))
  )
}

function renderCountriesItem(contriesArray) {
    refs.countryInfo.innerHTML = '';
refs.countryList.innerHTML = '';
 return contriesArray.forEach(element => {
    const name = element.name.official;
    const flag = element.flags.svg;
    const markup = `
    <h3><img src=${flag} width = 40> ${name}</h3>
`;
   refs.countryList.insertAdjacentHTML('beforeend',markup)
  });
}

function renderCountryInfo(contriesArray) {
  refs.countryInfo.innerHTML = '';
 refs.countryList.innerHTML = '';
  return contriesArray.forEach(element => {
    const name = element.name.official;
    const capital = element.capital[0];
    const population = element.population;
    const flag = element.flags.svg;
    const language = Object.values(element.languages).join(', ');
    const markup = `
    <h2><img src=${flag} width = 80> ${name}</h2>
    <ul>
    <li><p>Capital: ${capital}</p></li>
    <li><p>Population: ${population}</p></li>
    <li><p>Languages: ${language}</p></li>
    </ul>
`;
    refs.countryInfo.insertAdjacentHTML('beforeend', markup);
   
});
}

