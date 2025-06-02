import React from "react";
import { StyleSheet, css } from 'aphrodite';
import WithLogging from "../HOC/WithLogging";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            enableSubmit: false,
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        this.setState({ isLoggedIn: true });
    };

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value }, this.checkFormValidity);
    };

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value }, this.checkFormValidity);
    };

    checkFormValidity = () => {
        const { email, password } = this.state;
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const passwordValid = password.length >= 8;
        this.setState({ enableSubmit: emailValid && passwordValid });
    };

    render() {
        return (
            <main className={css(styles.appLogin)}>
                <div className={css(styles.responsive)}>
                    <form onSubmit={this.handleLoginSubmit}>
                        <p>Login to access the full dashboard</p>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                        />
                        <input
                            type="submit"
                            value="OK"
                            className={css(styles.button)}
                            disabled={!this.state.enableSubmit}
                        />
                    </form>
                </div>
            </main>
        );
    }
}

const styles = StyleSheet.create({
    appLogin: {
        flexDirection: 'column',
        gap: '20px',
        display: 'flex',
        justifyContent: 'space-around',
    },

    button: {
        alignSelf: 'flex-start',
        marginTop: '10px'
    },

    responsive: {
        '@media (max-width: 899px)': {
            display: 'flex',
            flexDirection: 'column',
        }
    }
});

export default WithLogging(Login);
