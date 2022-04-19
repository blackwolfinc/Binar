import { FETCH_POST, NEW_POST ,ADD } from './types';
// aku ambil data dari api 



let axios = require('axios');

var config = {
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/posts',
  headers: { }
};
// berfungsi untuk get data dari api 
function fetchPosts() {
  return (dispatch) => {
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      // setelah mendapatkan datanya lalu menjalakn fungsi Redux
       dispatch({
        type: FETCH_POST,
        payload: response
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

function createPost(post) {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => dispatch({
        type: NEW_POST,
        payload: data
      }));
  }
}

export { fetchPosts, createPost };