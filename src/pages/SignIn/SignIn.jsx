import './SignIn.css';
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { Navigate } from 'react-router-dom';



const SignIn = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLoginFunction = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

        try {
            const res = await axios.post("/auth/signin", { name, password });
            dispatch(loginSuccess(res.data))
        } catch (error) {
            dispatch(loginFailure())
        }
    }

    const signInWithGoogle = async () => {

        dispatch(loginStart());
        signInWithPopup(auth, provider)
            .then((result) => {
                axios
                    .post("/auth/google", {
                        name: result.user.displayName,
                        email: result.user.email,
                        img: result.user.photoURL,
                    })
                    .then((res) => {
                        console.log(res)
                        dispatch(loginSuccess(res.data));
                        Navigate("/");
                    });
            })
            .catch((error) => {
                dispatch(loginFailure());
            });
    }

    return (
        <div className='signin'>
            <div className='signin-wrap'>
                <h1>Sign in</h1>
                <h2>to continue to VideoTube</h2>

                <input type='text' placeholder="username" onChange={e => setName(e.target.value)} />
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <button
                    onClick={handleLoginFunction}
                >Sign in</button>

                <h1>or</h1>

                <button onClick={signInWithGoogle}>SignIn with Google</button>

                <h1>or</h1>

                <input type='text' placeholder="username" onChange={e => setName(e.target.value)} />
                <input type='email' placeholder="email" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />

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
