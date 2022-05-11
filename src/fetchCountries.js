


// function fetchCountries(name) {
//  return fetch('https://restcountries.com/v2/all?fields=flag,name,capital,population,languages')
//     .then((response) =>   response.json())
// }; 
    
//  fetchCountries().then(renderListCantries) .catch((error)=> console.log('error'));
// fetchCountries(name).then( renderListCards) .catch((error)=> console.log('error'));
// function renderListCantries (nameArrow) {
//   console.log(nameArrow)
// };

// function renderListCards(name, nameArrow) {
//    const card = nameArrow.find(item => item.name.toLowerCase() === name.toLowerCase())
//     console.log(card )
  
// }


const fetchCountries =(name)=> {
 return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) =>   response.json())
}; 
    
//  fetchCountries('Peru').then(renderListCantries) .catch((error)=> console.log('error'));
// fetchCountries(name).then( renderListCards) .catch((error)=> console.log('error'));
// function renderListCantries(nameArrow) {
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

// refs.countryList.insertAdjacentHTML('beforeend',renderListCantries)


// function renderListCards(name, nameArrow) {
//    const card = nameArrow.find(item => item.name.toLowerCase() === name.toLowerCase())
//     console.log(card )
  
// }