import React from 'react';
// import PropTypes from 'prop-types';
import OnlineIndicator from '../pure/onlineIndicator';
import { Contact } from '../../models/contact.class';


const ContactCard = () => {

    const defaultContact = new Contact('TestName', 'Test-Surname', 'name@mail.com', false);
    
    return (
        <div>
            <h1>{defaultContact.name} 
                {defaultContact.surname}
            </h1>
            <p>{defaultContact.email}</p>
            <OnlineIndicator contact={defaultContact}></OnlineIndicator>
        </div>
    );
};


// ContactCard.propTypes = {

// };


export default ContactCard;
