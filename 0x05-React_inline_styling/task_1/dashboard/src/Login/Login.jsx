// Login.jsx
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
    render() {
        return (
            <main className={css(styles.login)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email" className={css(styles.label)}>Email:</label>
                <input type="email" id="email" name="email" className={css(styles.input)} />

                <label htmlFor="password" className={css(styles.label)}>Password:</label>
                <input type="password" id="password" name="password" className={css(styles.input)} />

                <button className={css(styles.button)}>OK</button>
            </main>
        );
    }
}

const styles = StyleSheet.create({
    login: {
        margin: '2rem',
    },
    label: {
        marginRight: '1rem',
    },
    input: {
        margin: '0.5rem',
    },
    button: {
        marginLeft: '0.5rem',
    },
});

export default Login;
