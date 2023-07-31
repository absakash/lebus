import React, { useState } from 'react';

const Array = () => {
    const datas=[
        {id:1,name:"akash biswas"},
        {id:2,name:"biswas"},
        {id:3,name:"janidafslid"}
    ]
    const [mydata,setMydata]=useState(datas)
    const clearData=()=>{
        setMydata([])
    }
    const remove=(id)=>{
        const newArray=mydata.filter(current=>{
            return current.id!=id
        })
        setMydata(newArray)
    }
    return (
        <div>
            <h1>array starts...{mydata.length}</h1>
              {
                mydata.map(data=>{
                    return(
                        <p key={data.id}>name of holder {data.name} <button onClick={()=>remove(data.id)}>remove it </button> </p>
                    )
                })
              }
            <button onClick={clearData}>clear me </button>
        </div>
    );
};

export default Array;