import React, { useState } from 'react';

const Hooksobj = () => {
    const [myobj,setMyobj]=useState({
        name:'ddtn',age:123,profeesion:'student'
    })
const updates=()=>{
      setMyobj({...myobj,name:"doctors"})
}


    return (
        <div>
          <h1>use as a hooks objects</h1>
          <h1>nae {myobj.name} profession  : {myobj.profeesion}</h1>

          <button onClick={updates}>updateing</button>
        </div>
    );
};

export default Hooksobj;