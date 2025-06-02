import React, { useContext } from 'react';
import './Footer.css'
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';

function Footer() {
    const isIndex = window.location.pathname === '/';

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

Footer.propTypes = {
    user: propTypes.object,
};

export default Footer;
