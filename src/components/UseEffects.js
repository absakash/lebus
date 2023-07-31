import React, { useEffect, useState } from 'react';

const UseEffects = () => {
    const [count,setCount]=useState(0)



    // we canno't use any hooks conditionally 
    // but we can use condidtion inside the hooks 


    useEffect(()=>{
        if(count>=1){
            document.title=`chats ${count}`
        }
        else{
            document.title=(`chats `)
        }
        // document.title=`chats(${count})`
        console.log("inside the useeffect......")
    },[count])

    console.log("outside of the effets......")
    return (
        <div>
            <h1>working with useeffects......</h1>

            <h4>couting - {count}</h4>
            <button
            onClick={()=>setCount(count+1)}
            >increase</button>
        </div>
    );
};

export default UseEffects;