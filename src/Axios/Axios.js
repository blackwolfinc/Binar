let axios = require('axios');



export const getData = ()=>{
    var config = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos',
      headers: { }
    };
    
    return   axios(config).then((response) => response) //2
    .then((user) => {
      return(user); //3
    });
    
    
}