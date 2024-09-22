import React from 'react';

const Signup = ({ toggle, setToggle }) => {
    return (
        <div
            className={`absolute flex items-center h-96 w-full bg-yellow-500 transition-all duration-700 ease-in-out ${toggle === 'signup' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        >

            <div className='h-96 w-1/2 bg-green-500'>

            </div>
            <div className='h-96 w-1/2 flex items-center justify-center'>
                <button
                    onClick={() => setToggle('login')}
                    className='px-8 py-2 bg-black rounded-md text-white'>
                    Go to Login
                </button>
            </div>
        </div>
    );
};

export default Signup;
