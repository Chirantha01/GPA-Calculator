import './App.css';
import { useState } from 'react';
import User from './components/User';
import Test from './components/Test';
import SideBar from './components/SideBar';
import { useUserData } from './components/UserData';
import Progresscheck from './components/Progresscheck';

function App() {
  return (
    <div className=''>
      <User/>
    </div>
  );
}

export default App;
