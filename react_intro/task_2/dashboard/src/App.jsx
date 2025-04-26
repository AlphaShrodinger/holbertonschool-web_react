import React from "react";
import holbertonlogo from './assets/holberton-logo.jpg';
import './App.css';
import { getCurrentYear, getFooterCopy } from './utils.js';
import { Notifications } from "./Notifications.jsx";

function App() {
    const isIndex = false;

    return (
        <>
            <header>
                <Notifications />
                <div className='App-header'>
                    <img src={holbertonlogo} alt="holberton logo" />
                    <h1>School dashboard</h1>
                </div>
            </header>
            <div className='line'></div>
            <main>
                <div className='App-body'>
                    <p>Login to access the full dashboard</p>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                    <button>OK</button>
                </div>
            </main>
            <div className='line'></div>
            <footer>
                <div className='App-footer'>
                    <p>
                        Copyright {getCurrentYear()} - {getFooterCopy(isIndex)}
                    </p>
                </div>
            </footer>
        </>
    );
}

export default App