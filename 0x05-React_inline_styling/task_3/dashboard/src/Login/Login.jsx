// Login.jsx
import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px', // Space between each element
        alignItems: 'flex-start', // Align children to the left
        width: '300px', // Optional: Set a width for the form
        margin: 'auto', // Center the form on the page
    },
    label: {
        fontSize: '16px',
        marginBottom: '5px', // Space between label and input
    },
    input: {
        width: '100%',
        padding: '8px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px', // Space between button and other elements
    },
    buttonHover: {
        backgroundColor: '#45a049', // Button hover effect
    },
});

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className={css(styles.formContainer)}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={css(styles.label)} htmlFor="email">Email:</label>
                    <input
                        className={css(styles.input)}
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className={css(styles.label)} htmlFor="password">Password:</label>
                    <input
                        className={css(styles.input)}
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className={css(styles.button, styles.buttonHover)}
                >
                    Log In
                </button>
            </form>
        </div>
    );
}

export default Login;
