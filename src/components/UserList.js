import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";

function UserList(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data.users))
        .catch(err=>console.log(err)
        );

    },[]);
    return(
<div>
    <h2>User List</h2>
    <ul>
        {users.map(user=>(
            <li key={user.id}><Link to={`/users/${user.id}`}>{user.firstName}{user.lastName}</Link></li>
        )
        )}
    </ul>
</div>
    )
}

export default UserList;