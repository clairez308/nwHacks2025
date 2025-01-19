import React from 'react';

const LoginPage = () => {
    return (
        <div style={{ backgroundColor: 'blue', color: 'white' }}>
            <h1>Login Page</h1>
            <form>
                 <label htmlFor="username">Username:</label>
                <input type="text" id="username" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />

                <button type="submit" style={{ backgroundColor: 'green' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;