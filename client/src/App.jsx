import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm onUserAdded={handleUserAdded} />
      <UserList />
    </div>
  );
}

export default App;
