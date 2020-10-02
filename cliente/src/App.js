import React, { useState } from 'react';
import './App.css';

//components
import Chat from './components/Chat';

function App() {
  const [user, setUser] =  useState({name: "Marcelo",content: ""})
  return (
    <div className="App">
      <Chat user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
