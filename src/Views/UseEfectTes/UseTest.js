import React, { useEffect, useState } from 'react'

export const UseTest = () => {

    const [first, setfirst] = useState()


    useEffect(() => {
        // var requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        //   };
          
        //   fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
        //     .then(response => response.text())
        //     .then(result => setfirst(result))
        //     .catch(error => console.log('error', error));
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'https://jsonplaceholder.typicode.com/todos',
          headers: { }
        };
        
        axios(config)
        .then(function (response) {
            setfirst(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
        


    }, [])





  return (
      <>
           
        tes
         </>

  )
}
