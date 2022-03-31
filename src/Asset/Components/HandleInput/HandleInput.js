import React, { forwardRef, useImperativeHandle } from 'react';

 export const ChildModal = forwardRef((props, ref)=> {
   
    
    // useImperativeHandle(ref, () => ({
        
    //     // @ts-ignore
    //     eject: (callback: () => void) =>
    //     eject(() => eject("", callback))(),
    //   }));


    const eject = ()=>{

        alert("hit")
    }

    return (
        <div className="modal" ref={ref}>
           <p>This is an info modal</p>
            <button type="button" >   Close modal</button>
            
       </div>
    )
});