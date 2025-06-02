import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import useLogin from '../hooks/useLogin';

const Login = ({ logIn }) => {
    const {
        email,
        password,
        enableSubmit,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit
    } = useLogin(logIn);

    return (
        <div className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    data-testid="email-input"
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    data-testid="password-input"
                />
                <input
                    type="submit"
                    value="OK"
                    disabled={!enableSubmit}
                    data-testid="submit-button"
                />
            </form>
        </div>
    );
};

Login.propTypes = {
    logIn: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    login: {
        margin: '20px',
        '@meadia (max-width: 900px)': {
            margin: '8px'
        }
    },
});

export default Login;
