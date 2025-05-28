import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class Notifications extends React.Component {
    shouldComponentUpdate(nextProps) {
        // Update to allow re-rendering if displayDrawer prop changes
        return nextProps.displayDrawer !== this.props.displayDrawer ||
            nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
        const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

        return (
            <>
                <div className="menuItem" onClick={handleDisplayDrawer}>
                    Your notifications
                </div>
                {displayDrawer && (
                    <div className="Notifications">
                        <button
                            style={{ position: 'absolute', right: 10, top: 10 }}
                            aria-label="Close"
                            onClick={handleHideDrawer}
                        >
                            X
                        </button>
                        <p>Here is the list of notifications</p>
                    </div>
                )}
            </>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    listNotifications: PropTypes.array
};

Notifications.defaultProps = {
    displayDrawer: false,
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { },
    listNotifications: []
};

export default Notifications;
