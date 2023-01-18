import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const OnlineIndicator = ({contact}) => {

    return (
        <div>
            <p><b>{contact.isOnline ? 'Online':'Offline'}</b></p>
        </div>
    );
};


OnlineIndicator.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default OnlineIndicator;
