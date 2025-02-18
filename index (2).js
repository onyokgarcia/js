import React from 'react';
import Googlelog from '../src/th.png';
import './App.css'; // Ensure your CSS is still imported

const SignInPage = () => {
    return (
        <div className="container">
            <img src={Googlelog} alt="Google Logo" className="google-logo" />
            <div className="title">Sign in</div>
            <div className="subtitle">to continue to Gmail</div>

                
            <input type="email" placeholder="Email or phone" />
                <a href="forgot email" className="link">Forgot email?</a>
                    <div className='f'> 
                        <p>Not your computer? Use Guest mode to sign in privately.<a href='https://support.google.com/chrome/answer/6130773?hl=en-US"'>Learn more about using Guest mode</a>    </p>
                        <button className="button">Next</button>
                    </div> 
                <a href="create account" className="link">Create account</a>
                
            <div className="footer">

                <a href="https://support.google.com/accounts?hl=en-US&amp;p=account_iph" >Help</a>
                 <a href="https://accounts.google.com/TOS?loc=PH&amp;hl=en-US&amp;privacy=true" className='ww'>Privacy</a> 
                 <a href="https://accounts.google.com/TOS?loc=PH&amp;hl=en-US" >Terms</a>
            </div>
        </div>
    );  
};

export default SignInPage;

