import React from 'react';

//import CONTACTS from '../contacts';
import Contact from  './contact';

export default function ContactContainer(props) {
	console.log(props)
	let contactRoute = props.route.CONTACTS;
    const contact = contactRoute[props.params.contactId];
    return <Contact id={contact.id} name={contact.name}
                    phoneNumber={contact.phoneNumber} />;
};