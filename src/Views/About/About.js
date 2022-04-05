import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./About.css"
export const About = () => {
  // Untuk Menghandle Variable
  const [first, setfirst] = useState(0);
  const [bagas, setBagas] = useState("aku supermen");

  const [username, setUsername] = useState("");
  const [pasword, setPasword] = useState("");
  const [email, setEmail] = useState("");

  const [Data, setData] = useState("");
  //Contoh Function

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos",
      headers: {},
    };

    axios(config)
      .then(function(response) {
        setData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const handledata = (data) => {
    return data.map((value) => {
      return (
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.title} : {value.userId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.completed}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <hr/>
        </div>
        
      );
    });
  };

  const rubahJenis = (e) => {
    alert(e.target.id);
    alert("ini benar");
  };

  const handleRubah = (e) => {
    //   Untuk merubah value
    setPasword(e.target.value);
  };

  return (
    <div>
      {/* memangil Variabel */}
      <h1>{first}</h1>
      <h1>{bagas}</h1>
      {/* contoh inputan  */}
      <input
        id="username"
        onChange={(e) => {
          handleRubah(e);
        }}
        value={username}
        type="text"
      />
      <input
        id="pasword"
        onChange={(e) => {
          handleRubah(e);
        }}
        type="text"
      />
      <input
        id="email"
        onChange={(e) => {
          handleRubah(e);
        }}
        type="text"
      />
      {/* contoh Button  */}
      <button
        id="aku bagas"
        onClick={() => {
          handledata(Data);
        }}
      >
        button rubah
      </button>

        <div className="CardDetail">
        {handledata(Data ? Data : [])}
        </div>
   
    </div>
  );
};
