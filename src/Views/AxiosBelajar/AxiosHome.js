import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";

export const AxiosHome = () => {
  let axios = require('axios');
  let thisDay = new Date() ;

 
  const [SelectValue, setSelectValue] = useState("3")



  return (
    <div>
    {SelectValue === "1" ? <h1>ini section 1</h1>:null }
    {SelectValue === "2" ? <h1>ini section 2</h1>:null }
    {SelectValue === "3" ? <h1>ini section 3</h1>:null }


    </div>
  );
};
