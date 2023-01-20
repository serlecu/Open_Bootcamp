import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import OnlineIndicator from '../pure/onlineIndicator';
import { Contact } from '../../models/contact.class';
import '../../styles/contact.css'


const ContactCard = ({ contact, remove, status, show }) => {

    useEffect(() => {
        console.log('Task: ', contact);

        return () => {
            console.log('Cleaning up...');
        }
    }, [contact]);

    return (
        <tr>
            <td>
                <OnlineIndicator
                    contact={contact}
                    status={status}>
                </OnlineIndicator>
            </td>
            <td onClick={() => show(contact)}>
                {contact.name} {contact.surname}
            </td>
            <td>
                {contact.email}
            </td>
            <td>
                <i className="bi-trash color-danger"
                    onClick={() => remove(contact)}></i>
            </td>
        </tr>
    );
};


ContactCard.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    remove: PropTypes.func.isRequired,
    status: PropTypes.func.isRequired
};


export default ContactCard;
