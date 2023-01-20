import React, { useState,} from 'react';
import { Contact } from '../../models/contact.class';
import ContactCard from '../pure/contactCard';


const ContactList = () => {

    const defaultContact = new Contact('John', 'Doe', 'johndoe@mail.com', false);

    const [contacts, setContacts] = useState([defaultContact]);

    function addContact() {
        const tempContacts = [...contacts];
        tempContacts.push(defaultContact);
        setContacts(tempContacts);
    }

    function removeContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function switchContactStatus(contact) {
        console.log('Switching status...');
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].isOnline = !tempContacts[index].isOnline;
        setContacts(tempContacts);
    }

    function showContact(contact) {
        console.log(`Showing contact... ${contact.name} ${contact.surname}`);
    }

    return (
        <div>
            <div className='col-12'>
                <div className="card">
                    <div className="card-header p-3">
                        <h5>Contacts:</h5>
                    </div>
                    <div className="card-body"
                        style={{ position: 'relative', height: '200px' }}></div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) => {
                                return (
                                    <ContactCard
                                        key={index}
                                        contact={contact}
                                        remove={removeContact}
                                        status={switchContactStatus}
                                        show={showContact}>
                                    </ContactCard>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <i className='bi-plus-circle color-success'
                                        onClick={addContact}></i>
        </div>
    );
};


export default ContactList;
