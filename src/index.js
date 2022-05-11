import './css/styles.css';
import fetchCountries from './fetchCountries'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var debounce = require('lodash.debounce');


const DEBOUNCE_DELAY = 300;
const refs = {
  onInput: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
}




refs.onInput.addEventListener('input', _.debounce(onInput,DEBOUNCE_DELAY));

function onInput(evt) {
  console.log(evt.currentTarget.value);
  // return (Notify.info("Too many matches found. Please enter a more specific name."));
   // console.log(Notify.failure("Oops, there is no country with that name")) 
}

//  fetchCountries('Peru').then(renderListCantries) .catch((error)=> console.log('error'));

//  function renderListCantries(nameArrow) {
//   const countryObject = nameArrow[0]
  
//   const capital = countryObject.capital[0];
//   const population = city.population;
//   const languages = Object.values(city.languages).join(', ');
//   const name = city.name.official;
//   const flag = city.flags.svg;

//   console.log(capital);
//   console.log(city);
//   console.log( name)
//   return city({ capital }) => {

//         return `
//  <h2>  <img
//       src="${flag}"
//       alt="${name}"
//     />${name} </h2>
//   <p>Capital:'${ capital }'</p>
//   <p>Population:${population}</p>
//   <p>Languages:${languages}</p>

//     `
//     }).join('');

// };