// const country = fetch('https://restcountries.com/v3.1/name/peru')
//     .then((response) =>   response.json())
// .then ((name)=>console.log(name)) 
    

// console.log(country)











  const countries = fetch('https://restcountries.com/v3.1/name/poland')
    .then((response) =>   response.json())
        .then((nameArray) => console.log(nameArray)  ) 
        
    .catch((error)=> console.log('error'));
    
