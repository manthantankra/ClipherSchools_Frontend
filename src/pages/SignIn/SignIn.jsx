import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className='signin'>
            <div className='signin-wrap'>
                <h1>Sign in</h1>
                <h2>to continue to VideoTube</h2>
                <input type='text' placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Sign in</button>
                <h1>or</h1>
                <input type='text' placeholder="username" />
                <input type='email' placeholder="email" />
                <input type="password" placeholder="password" />
                <button>Sign up</button>
            </div>

            <div className='signin-links'>
                English(USA)
                <div className='links'>
                    <span className='link'>Help</span>
                    <span className='link'>Privacy</span>
                    <span className='link'>Terms</span>
                </div>
            </div>
        </div>
    )
}

export default SignIn
