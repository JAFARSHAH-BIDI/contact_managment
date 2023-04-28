import React, { useState,useEffect } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import ContactCard from './ContactCard'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'



function App() {
  const [contacts, setContact] = useState([])
  const Local_Storage_key = "contacts"
  const addcontactHandler = (contact) =>{
    // console.log(contact);
    setContact([...contacts,{id: uuid(), ...contact}])

  }
const deleteContact = (id)=>{
  const storeContact = contacts.filter((contact)=> contact.id !==id)
  setContact(storeContact)
} 

  useEffect (()=>{
  if (contacts.length) localStorage.setItem(Local_Storage_key, JSON.stringify(contacts))
  },[contacts])

  useEffect (()=>{
    const ReserveData =  JSON.parse(localStorage.getItem(Local_Storage_key))
    if (ReserveData) setContact(ReserveData)
  },[])
 


  // const contacts = [
  //   {
  //     id : "1",
  //     name : "shah",
  //     email : "shah@gmail.com"
  //   },
  //   {
  //     id : "2",
  //     name : "zafar",
  //     email : "zafar@gmail.com"
  //   }
  // ]
  return (
    <div className="App">
      <Header />
      <AddContact addcontactHandler = {addcontactHandler} />
      <ContactList contacts = {contacts} removeContact ={deleteContact}/>
       
      
    </div>

  );
}

export default App;
