import React, { useEffect } from 'react'
import { connect } from 'react-redux'

export const Page2 = (props) => {
    useEffect(() => {
   
    }, [props])
    
    

  return (
    <div>
    {console.log(props)}
    
  
    {props.dataValue}

    <button onClick={()=>{props.handelplus()}}>add </button>
    
    
    </div>
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

export default connect(mapStateToProps,mapDispatchToProps )(Page2) 