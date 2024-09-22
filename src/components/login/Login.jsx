import React from 'react';

const Login = ({ toggle, setToggle }) => {
    return (
        <div
            className={`absolute h-96 w-full flex items-center bg-green-500 transition-all duration-700 ease-in-out ${toggle === 'login' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
            <div className='h-96 w-1/2 bg-yellow-500 flex items-center justify-center'>
                <button
                    onClick={() => setToggle('signup')}
                    className='px-8 py-2 bg-black rounded-md text-white'>
                    Go to Signup
                </button>
            </div>
            <div className='h-96 w-1/2'>

            </div>

        </div>
    );
};

export default Login;
