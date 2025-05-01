import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
    return (
        <li
            data-notification-type={type}
            {...(html ? { dangerouslySetInnerHTML: html } : {})}
            style={{ color: type === 'urgent' ? 'red' : 'blue' }}
        >
            {!html && value}
        </li>
    );
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    value: PropTypes.string,
};

NotificationItem.defaultProps = {
    html: null,
    value: '',
};

export default NotificationItem;
