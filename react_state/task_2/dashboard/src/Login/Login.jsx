import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email || '',
            password: props.password || '',
            enableSubmit: false
        };
    }

    handleChangeEmail = (e) => {
        const email = e.target.value;
        const { password } = this.state;
        this.setState({
            email,
            enableSubmit: email !== '' && password.length >= 8
        });
    };

    handleChangePassword = (e) => {
        const password = e.target.value;
        const { email } = this.state;
        this.setState({
            password,
            enableSubmit: email !== '' && password.length >= 8
        });
    };

    handleLoginSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.logIn(email, password);
    };

    render() {
        return (
            <form onSubmit={this.handleLoginSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                />
                <button type="submit" disabled={!this.state.enableSubmit}>
                    Log In
                </button>
            </form>
        );
    }
}

Login.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    logIn: PropTypes.func.isRequired
};

Login.defaultProps = {
    email: '',
    password: ''
};

export default Login;
