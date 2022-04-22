import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want delete')
        if (proceed) {
            console.log('deleting user with id', id)
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainign = users.filter(user => user._id !== id);
                        setUsers(remainign)
                    }
                })

        }
    }
    return (
        <div>
            <h1>Load data: {users.length}</h1>
            <ul>
                {
                    users.map(user => <li key={user._id}>{user.name} : {user.email}
                        <Link to={`/update/${user._id}`}>
                            <button>Update</button>
                        </Link>
                        <button
                            onClick={() => handleUserDelete(user._id)}
                        >X</button>

                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;