import React, { useEffect } from "react";

export const LocalStorage = () => {

  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
        // sessionStorage.setItem("dataUser", JSON.stringify(response.data));
 
    })
    .catch(function (error) {
      console.log(error);
    });
    
  
  }, []);



  const GetLocal = () => {
  //  let data  = JSON.parse( sessionStorage.getItem("dataUser"))
   let data  = sessionStorage.getItem("dataUser")
  };

  return (
    <>
      {" "}
      <h1>hahaha</h1>
      {GetLocal()}
      <button
        onClick={() => {
          sessionStorage.removeItem("dataUser");
        }}
      >
        hapus local{" "}
      </button>
    </>
  );
};
