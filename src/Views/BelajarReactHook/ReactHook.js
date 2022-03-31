import React ,{useEffect, useState ,useRef} from 'react'
import { ChildModal } from '../../Asset/Components/HandleInput/HandleInput'


export const ReactHook = () => {
// hoox = use State 

const [first, setfirst] = useState(0)
const [kosonValue, setkosonValue] = useState(0)


const buttonDefault = useRef()
const buttonDefault2 = useRef()

    
const tambah =()=>{
  console.log(buttonDefault)
  console.log(buttonDefault2)
}


const kosong =()=>{

}

return (
    <div> 
     <h1>{first}</h1>
     <input ref={buttonDefault2} id="guanteng" type="text"></input>
     <ChildModal ref={buttonDefault}/>
     <button  onClick={()=>{tambah()}}> masukan</button>
    </div>


  )
}
