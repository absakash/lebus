import React, { useState } from 'react';

const Form = () => {

    const [user,setUser]=useState(
        {name :"", father:""}
    )
    
    let name,value;
    const handleInput=event=>{
        name=event.target.name;
        value=event.target.value;

        setUser({...user,[name]:value})
    }

    const handleButton=(e)=>{
         e.preventDefault()
         console.log(user.name,user.father)
    }
    return (
        <div>
            <form action="">
                <input type="text" name='name' value={user.name} placeholder='enter  your name : ' onChange={handleInput}/><br />
                <input type="text" name='father' value={user.father} placeholder='enter your father name :' onChange={handleInput}/>
                <br />
                <button onClick={handleButton}>submit me</button>
            </form>
        </div>
    );
};

export default Form;