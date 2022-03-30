import React, { useState } from "react";

export const About = () => {
    // Untuk Menghandle Variable
  const [first, setfirst] = useState(0);
  const [bagas, setBagas] = useState("aku supermen");

  const [username, setUsername] = useState("");
  const [pasword, setPasword] = useState("");
  const [email, setEmail] = useState("");
  //Contoh Function 
  const rubahJenis = (e) => {
    alert(e.target.id);
    alert("ini benar");
  };

  const handleRubah = (e) => {
    //   Untuk merubah value 
      setPasword(e.target.value)
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
        onClick={(e) => {
          rubahJenis(e);
        }}
      >
        button rubah
      </button>
    </div>
  );
};
