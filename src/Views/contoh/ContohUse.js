import React, { useState  ,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export const ContohUse = () => {

    const [Data, setData] = useState([])



    // dia hanya akan berjalan satu kali 
    useEffect(() => {
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'https://jsonplaceholder.typicode.com/todos',
          headers: { }
        };
        
        axios(config)
        .then(function (response) {
            console.log(response , "response")
            setData(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }, [])

    const handledata = (data) => {
        return data.map((e) => {
          return <div>
            ini Title :   {e.title}
          </div>
        });
      };
   

  return (
    <div>
        <h1>tes</h1>
       {handledata(Data)}
    </div>
  )
}
