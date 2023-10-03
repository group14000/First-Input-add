import React, { useState } from 'react';
import './App.css'; // Add your CSS file for styling

function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [userList, setUserList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    const inputAge = event.target.value;
    if (inputAge >= 0 || inputAge === '') {
      setAge(inputAge);
      setErrorMessage('');
    } else {
      setAge('');
      setErrorMessage('Incorrect input, please enter a correct input');
    }
  };

  const handleAddUser = () => {
    if (username && age !== '' && errorMessage === '') {
      const newUser = {
        username: username,
        age: age,
      };

      setUserList([...userList, newUser]);
      setUsername('');
      setAge('');
    }
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="number"
          placeholder="Age(Years)"
          value={age}
          onChange={handleAgeChange}
        />
        <button onClick={handleAddUser}>Add Button</button>
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <div>
        {userList.map((user, index) => (
          <div key={index}>
            {user.username} - {user.age} (Years)
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
