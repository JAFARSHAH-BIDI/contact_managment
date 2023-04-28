import React from 'react'
import ContactCard from './ContactCard';

const contactList = (props) => {
    console.log(props);

    const removeContact = (id) => {
        props.removeContact(id)
    }

    const rendercontactlist = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} getId={removeContact}></ContactCard>
        )

    });
    {
        return (
            <div className='ui celled list'>
                {rendercontactlist}
            </div>
        )
    }
}
export default contactList

