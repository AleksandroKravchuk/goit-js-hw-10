// const country = fetch('https://restcountries.com/v3.1/name/peru')
//     .then((response) =>   response.json())
// .then ((name)=>console.log(name)) 
    

// console.log(country)











  fetch('https://restcountries.com/v3.1/all')
    .then((response) =>   response.json())
        .then((nameArray) => console.log(nameArray)  ) 
        
    .catch((error)=> console.log('error'));
    
