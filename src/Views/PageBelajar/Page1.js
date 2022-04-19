
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

export const Page1 = (props) => {
  return (
    <div>    {props.dataValue} </div>
  )
}


const mapStateToProps  = (state) =>{
    return {
        dataValue : state.tokenKey
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handelplus: ()=> dispatch({type:"ADD_TOKEN" }) ,
   
    }

}

export default connect(mapStateToProps,mapDispatchToProps )(Page1) 