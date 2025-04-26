import React from 'react';
import getLatestNotification from './utils';
import closeIcon from './close-icon.png';

function Notifications() {
    const handleCloseClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className="Notifications" style={{ position: 'relative', padding: '10px', border: '1px solid black' }}>
            <button
                aria-label="Close"
                onClick={handleCloseClick}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                <img src={closeIcon} alt="close icon" style={{ width: '10px', height: '10px' }} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;
