import React, { useEffect, useState } from 'react';

const API = () => {
    const [user,setUser] = useState([])
    const [loading,setLoading]=useState(true)

    const getUser=async()=>{
       try{
        const respose= await fetch('https://jsonplaceholder.typicode.com/posts')
        const data=  await respose.json()

        setUser( data)
        console.log(data)
        setLoading(false)
       
       }catch(error){
        console.log("my error is ", error)
       }
        
    }
   useEffect(()=>{
       getUser()
   },[])

   if(loading){
    return <div>undr the l;oading .....</div>
}
    return (
        <div>
            <h1>the total numbers of user in github : {user.length}</h1>
            {
                user.map(muser=>{
                    return (
                        <h4>name of the usr : {muser.title}</h4>
                    )
                })
            }
        </div>
    );
};

export default API;