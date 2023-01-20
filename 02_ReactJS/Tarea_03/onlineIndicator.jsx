import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const OnlineIndicator = ({ contact, status }) => {

    return (
        <i className={contact.isOnline ? 'bi-circle-fill color-success' : 'bi-circle color-danger'}
            onClick={() => status(contact)}></i>
    );
};


OnlineIndicator.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    status: PropTypes.func.isRequired
};


export default OnlineIndicator;
