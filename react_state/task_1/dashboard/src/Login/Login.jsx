import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            enableSubmit: false,
        };

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        // Al hacer submit se debe llamar a la función logIn que se pasará como prop
        this.props.logIn(this.state.email, this.state.password);
    }

    handleChangeEmail(e) {
        const email = e.target.value;
        this.setState({ email }, this.validateForm);
    }

    handleChangePassword(e) {
        const password = e.target.value;
        this.setState({ password }, this.validateForm);
    }

    validateForm() {
        const { email, password } = this.state;
        // Validación simple de email
        const emailRegex = /\S+@\S+\.\S+/;
        const enableSubmit = emailRegex.test(email) && password.length >= 8;
        this.setState({ enableSubmit });
    }

    render() {
        const { email, password, enableSubmit } = this.state;
        return (
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={this.handleLoginSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={this.handleChangeEmail}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={this.handleChangePassword}
                    />

                    <input type="submit" value="Submit" disabled={!enableSubmit} />
                </form>
            </div>
        );
    }
}

export default Login;