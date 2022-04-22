import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams()
    const [user,setUser] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    const handleUpdateUser = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = {name,email}

        // post data

        fetch(`http://localhost:5000/user/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success',data)
            alert('user added successfully!!!')
            event.target.reset()
        })

    }

    return (
        <div>
            <h2>Update User :{user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' required placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateUser;