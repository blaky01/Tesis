import React from 'react';

const Login = (props) => {

    const { 
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount, 
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return(
        <section className="login">
            <div className="loginContainer">
               <label><b>Username</b></label>
               <input 
               type="text" 
               autoFocus 
               required 
               value={email} 
               onChange={(e) => setEmail(e.target.value)}
               />
               <p className="errorMsg"></p>
               <label><b>Password</b></label>
               <input 
               type="password"
               required 
               value={password} 
               onChange={(e) => setPassword(e.target.value)} 
               />
               <p className="errorMsg">{passwordError}</p>
               <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}><b>Sign in</b></button>
                        <p>Don't have an account ?{" "}<span onClick={() => setHasAccount(!hasAccount)}><b>Sing up</b></span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}><b>Sign up</b></button>
                        <p>Have an account ?{" "} <span onClick={() => setHasAccount(!hasAccount)}><b>Sign in</b></span></p>
                        </>
                    )}
                </div>
            </div>  
        </section>
    );
};

export default Login;