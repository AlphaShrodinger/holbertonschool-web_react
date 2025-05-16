import React from 'react';
import './App.css';

class App extends React.Component {
    static defaultProps = {
        logOut: () => { },
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'h') {
            alert('Logging you out');
            this.props.logOut();
        }
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>School dashboard</h1>
                </header>
                <main className="App-body">
                    <p>Login to access the full dashboard</p>
                </main>
                <footer className="App-footer">
                    <p>Copyright 2024 - Holberton School</p>
                </footer>
            </div>
        );
    }
}

export default App;