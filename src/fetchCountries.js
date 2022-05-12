const BASE_URL = `https://restcountries.com`;

export default
    function fetchCountries(name) {
 return fetch(`${BASE_URL}/v3.1/name/${name}?fields=flags,name,capital,population,languages`)
    .then((response) =>   response.json())
}; 
    