



function fetchCountries(name) {
  fetch('https://restcountries.com/v2/all?fields=flag,name,capital,population,languages')
    .then((response) =>   response.json())
    .then((nameArrow) => {
   
      const ty = nameArrow.find(item => item.name.toLowerCase() === name.toLowerCase())
    console.log(ty )}) 
        
    .catch((error)=> console.log('error'));} 
    
fetchCountries("ukraine");

