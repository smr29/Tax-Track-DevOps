import React from 'react';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const AppBar = () => {

    const handleLogout = async () => {
        try {
          await signOut(auth)
        } catch(error) {
          console.log("log out error", error)
        }
      }
    return (
        
    <nav>
        <div className="bg-slate-800 p-6 border-b border-white" >
            <Link to="/home" className="text-3xl py-4 pr-4 font-bold text-blue-700 align-middle"><span className='text-blue-600'>Tax</span>Track</Link>
            <Link to="/home" className="text-white p-4 align-middle">Home</Link>
            <Link to="/history" className="text-white p-4 align-middle">History</Link>
            <Link to="/news" className="text-white p-4 align-middle">News</Link>
            <Link to="/faq" className="text-white p-4 align-middle">FAQ</Link>
            <Link to="/login" className="text-white p-1 float-right align-middle" onClick={handleLogout}>Log out</Link>
            </div>
    </nav>
    );
};

export default AppBar;