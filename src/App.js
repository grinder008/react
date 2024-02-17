import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '10px', width: '300px' }}>
          <label htmlFor="username" style={{ marginRight: '10px' }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px', width: '300px' }}>
          <label htmlFor="email" style={{ marginRight: '10px' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px', width: '300px' }}>
          <label htmlFor="password" style={{ marginRight: '10px' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }}
          />
        </div>
        <button style={{ padding: '5px 10px', borderRadius: '3px', background: '#007bff', color: '#fff', border: 'none', width: '100px' }} type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
