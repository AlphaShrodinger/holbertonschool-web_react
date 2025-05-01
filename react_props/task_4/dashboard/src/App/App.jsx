import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const coursesList = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
    ];

    return (
        <div className="App">
            <Header />
            {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
            <Footer />
        </div>
    );
}

export default App;