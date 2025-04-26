import holbertonlogo from './assets/holberton-logo.jpg'
import './App.css'

function App() {

    return (
        <>
            <header>
                <div className='App-header'>
                    <img src={holbertonlogo} alt="holberton logo" />
                    <h1>School dashboard</h1>
                </div>
            </header>
            <div className='line'></div>
            <main>
                <div className='App-body'>
                    <p>
                        Login to access the full dashboard
                    </p>
                </div>
            </main>
            <div className='line'></div>
            <footer>
                <div className='App-footer'>
                    <p>
                        Copyright 2024 - holberton School
                    </p>
                </div>
            </footer>
        </>
    )
}

export default App