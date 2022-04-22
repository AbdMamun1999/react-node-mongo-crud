import React from 'react';

const AddUser = () => {
    const addUser = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name,email}

        // post data

        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(user)
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
            <h2>Please add a new user</h2>
            <form onSubmit={addUser}>
                <input type="text" name='name' required placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;