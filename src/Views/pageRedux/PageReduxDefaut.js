import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from "../../Redux/action/postActions"
const PageReduxDefaut = (props) => {

    useEffect(() => {
        props.getApi()
    }, [])
    


  return (
    <div>
        ini adalah total Harga :    {props.dataCount}
        {console.log(props , " ini Props")}
      
        <button onClick={()=>{props.addAyang()}}> add data </button>
        <button onClick={()=>{props.addAyang()}}> minus data </button>
    </div>
  )
}

// mengambil data dari react 
const mapStateToProps =(state)=>{
    return {
        dataCount : state.manager1.Count
    }
}

// mentrriger SOP 
const mapDispatchToProps =(dispatch)=>{
    return {
        addAyang : ()=>dispatch({type :"ADD"}),
        getApi :()=>dispatch(fetchPosts()) 
    }
}

// export default connect(1,2)(3)
// 1 = untuk Mengabil data 
// 2 = untuk Mentriger Action 
// 3 = mengkoneksikan page 
export default connect(mapStateToProps , mapDispatchToProps)(PageReduxDefaut)