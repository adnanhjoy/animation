'use client'
import React, { useState } from 'react';
import Login from '../login/Login';
import Signup from '../signup/Signup';

const AuthComponent = () => {
    const [toggle, setToggle] = useState('login');

    return (
        <div className='container mx-auto relative w-1/2'>
            <div className="relative h-96 w-full overflow-hidden">
                <Login toggle={toggle} setToggle={setToggle} />
                <Signup toggle={toggle} setToggle={setToggle} />
            </div>
        </div>
    );
};

export default AuthComponent;
