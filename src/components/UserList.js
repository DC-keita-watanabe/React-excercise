import React from "react";

const UserList = () => {
    const [users, setUsers] = React.useState([]);


    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((obj) => setUsers(obj));
    },[])

    return(
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UserList