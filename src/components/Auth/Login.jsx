import React, { useState } from 'react';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false )

    const submitHandler = (e)=>{  
       e.preventDefault(); 
       props.loginHandler(username,password)
       setUsername('');
       setPassword('');
    }

    return (
        <div className="bg-[#1e1e1e] text-white h-screen flex justify-center items-center">
            <div className="border border-white w-[400px] p-8 rounded-2xl bg-gray-900 shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
                <form className="relative flex flex-col space-y-4" onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        className="p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        autoComplete='username'
                    />
                    <input
                        type={showPassword?'text' : 'password'}
                        placeholder="Enter Password"
                        className="p-3 pr-16 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        autoComplete='current-password'
                    />

                   <button 
                   type='button'
                   className='cursor-pointer absolute right-3 bottom-13 text-blue-500 underline hover:text-blue-600'
                   onClick={()=>setShowPassword(!showPassword)}>
                       {showPassword?'Hide': 'Show'}
                   </button>

                    <button
                        type="submit"
                        className="bg-white cursor-pointer text-black font-semibold py-2 rounded-lg hover:bg-gray-300 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
