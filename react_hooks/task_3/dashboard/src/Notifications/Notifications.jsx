import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import NotificationItem from "../Notifications/NotificationItem.jsx";
import { StyleSheet, css } from 'aphrodite';
import closeButton from "../assets/close-button.png";

const styles = StyleSheet.create({
    notificationtTitle: {
        fontWeight: 'bold',
        position: 'fixed',
        right: '20px',
        top: '20px',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1001,
        ':hover': {
            animationName: {
                '0%': { opacity: 0.5 },
                '100%': { opacity: 1 }
            },
            animationDuration: '1s',
            animationIterationCount: 3,
            animationTimingFunction: 'ease-in-out',
        },
        ':active': {
            animationName: {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-5px)' },
                '75%': { transform: 'translateY(5px)' }
            },
            animationDuration: '0.5s',
            animationIterationCount: 3,
        },
        '@media (max-width: 899px)': {
            display: 'block',
            textAlign: 'center',
            paddingRight: '10px',
        }
    },

    notifications: {
        display: 'block',
        width: '300px',
        height: '100px',
        border: '3px dashed #e14852',
        paddingBottom: '20px'
    },

    notiGeneral: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    ul: {
        paddingLeft: 30,
        listStyle: 'none'
    },

    p: {
        marginLeft: '10px'
    },

    closeButton: {
        position: 'absolute',
        right: '30px',
        top: '55px',
        border: 'none',
        background: 'transparent',
        padding: 0,
    },

    img: {
        width: '20px',
        height: '20px',
        marginBottom: '10px'
    },

    defaultNotification: {
        color: 'blue'
    },

    urgentNotification: {
        color: 'red'
    },

    hideMenuItem: {
        display: 'none'
    },

    container: {
        '@media (max-width: 899px)': {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'white',
            zIndex: 1000,
            padding: 0,
            transition: 'opacity 0.3s ease-in-out',
        }
    },

    show: {
        '@media (max-width: 899px)': {
            opacity: 1,
            display: 'block',
        }
    },

    hide: {
        '@media (max-width: 899px)': {
            opacity: 0,
            display: 'none',
        }
    },

    button: {
        position: 'absolute',
        right: '10px',
        top: '10px',
        border: 'none',
        background: 'transparent',
    },

    text: {
        fontSize: '20px',
        marginLeft: '10px',
    },

    ulList: {
        padding: 0,
        listStyle: 'none',
    },
});

class Notifications extends PureComponent {
    render() {
        const {
            notifications,
            displayDrawer,
            handleDisplayDrawer,
            handleHideDrawer,
            markNotificationAsRead
        } = this.props;

        return (
            <>
                <div className={css(
                    styles.notificationtTitle,
                    styles.notiGeneral,
                    displayDrawer && styles.hideMenuItem
                )}
                    onClick={handleDisplayDrawer}
                >
                    Your Notifications
                </div>
                <div className={css(styles.notiGeneral)}>
                    {displayDrawer && (
                        <div className={css(styles.container, displayDrawer ? styles.show : styles.hide)}>
                            <button
                                className={css(styles.button)}
                                aria-label="close"
                                onClick={handleHideDrawer}
                            >
                                <img src={closeButton} alt="close button icon" className={css(styles.img)} />
                            </button>
                            <p className={css(styles.p)}>
                                {notifications.length > 0
                                    ? "Here is the list of notifications"
                                    : "No new notification for now"}
                            </p>
                            {notifications.length > 0 && (
                                <ul className={css(styles.ulList)}>
                                    {notifications.map((notification) => (
                                        <NotificationItem
                                            key={notification.id}
                                            id={notification.id}
                                            type={notification.type}
                                            value={notification.value}
                                            html={notification.html}
                                            markAsRead={() => markNotificationAsRead(notification.id)}
                                            className={css(
                                                notification.type === 'default' ? styles.defaultNotification : styles.urgentNotification
                                            )}
                                        />
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </>
        );
    }
}

Notifications.defaultProps = {
    notifications: [],
    displayDrawer: false,
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { },
    markNotificationAsRead: () => { }
};

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string,
            html: PropTypes.shape({
                __html: PropTypes.string,
            }),
        })
    ),
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func
};

export default Notifications;
