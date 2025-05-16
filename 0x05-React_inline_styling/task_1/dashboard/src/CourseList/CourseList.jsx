import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
    },
    input: {
        padding: '10px',
        margin: '5px 0',
    },
    button: {
        padding: '10px',
        marginTop: '10px',
    },
});

function Login() {
    return (
        <form className={css(styles.form)}>
            <label>Email</label>
            <input type="email" className={css(styles.input)} />
            <label>Password</label>
            <input type="password" className={css(styles.input)} />
            <button type="submit" className={css(styles.button)}>Login</button>
        </form>
    );
}

export default Login;