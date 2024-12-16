import React, { useState } from 'react';
function UserProfile() {
  const [user, setUser] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name:",value)
    // console.log("name:",name)
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={user.name} 
        onChange={handleChange} 
      />
      <input 
        type="number" 
        name="age" 
        placeholder="Age" 
        value={user.age} 
        onChange={handleChange} 
      />
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
    </div>
  );
}

export default UserProfile;