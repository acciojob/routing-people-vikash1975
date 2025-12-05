import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users/${id}`)  // correct URL
      .then(res => res.json())
      .then(data => {
        setUser(data); // data me hi user ka object hai
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found.</div>;

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.domain}</p>
      <Link to="/">Back to User List</Link>
    </div>
  );
}

export default UserDetails;