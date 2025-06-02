import React, { useContext } from 'react';
import './Footer.css'
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';
import AppContext from '../Context/context.js';

function Footer() {
    const isIndex = window.location.pathname === '/';
    const { user } = useContext(AppContext);

    return (
        <footer>
            <div className='line'></div>
            <div className='App-footer'>
                <p>
                    Copyright {getCurrentYear()} - {getFooterCopy(isIndex)}
                </p>
                {user && user.isLoggedIn && (
                    <p>
                        <a href='#'>Contact us</a>
                    </p>
                )}
            </div>
        </footer>
    );
}

export default Footer;
