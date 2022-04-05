import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";

export const AxiosHome = () => {
  let axios = require('axios');
  let thisDay = new Date() ;

 
  const [SelectValue, setSelectValue] = useState(null)
  const [DateValue, setDateValue] = useState(new Date())
  const [TimeValue, setTimeValue] = useState( new Date())
  const [ValueNumber, setValueNumber] = useState(null)

  const [Data, setData] = useState({})

  useEffect(() => {
  
    GetCustomer()

  }, [ValueNumber ,DateValue ,TimeValue ,SelectValue])
  



  const rubahFormat=(data)=>{
    let dataformat =  moment(data).format("MM")
    return dataformat
  }

  const rubahFormatD=(data)=>{
    let dataformat =  moment(data).format(",DD")
    return dataformat
  }

  const rubahFormatY=(data)=>{
    let dataformat =  moment(data).format("yyyy")
    return dataformat
  }




 const GetCustomer =()=>{

  var config = {
    method: 'get',
    url: 'https://rent-cars-api.herokuapp.com/customer/car',
    headers: { }
  
  };
  axios(config)
  .then(function (response) {
    setData(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

}

  const filter = ()=>{
    console.log(Data)


    let dateStart = rubahFormat("2022-03-13T04:49:44.187Z")
    let dateEnd = rubahFormat("2022-03-15T04:49:44.187Z")
    let dataSekarang = rubahFormat(DateValue)


  }


  return (
    <div>
    {console.log(Data ? Data : null)}
   {filter()}
   
      <select onChange={(e)=>{setSelectValue(e.value)}}>
        <option value={"tes"}> tes</option>
        <option value={"tes2"}> tes2</option>
        <option value={"tes3"}> tes3</option>
      </select>

      <DatePicker
        selected={TimeValue}
        onChange={(date) => setTimeValue(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
 
      <DatePicker
        selected={DateValue}
        onChange={(date) => setDateValue(date)}
      />

      <input onChange={(e)=>{
        setValueNumber(e.target.value)
      }} type="number"></input>

    </div>
  );
};
