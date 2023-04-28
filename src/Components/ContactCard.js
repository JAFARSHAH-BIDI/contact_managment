import React from 'react'
import user from "../Images/Pic.png"

const ContactCard = (props)=> {
    const {id,name,email} = props.contact;

    return(
        <div className='item'>
            <img className='ui avatar image' src = {user} alt = "user" ></img>

        <div className='content'>
            <div className='header'>{name}</div>
            <div>{email}</div>
            <i className='trash alternate outline icon'
            style= {{ color: "red" , marginTop : "7px"}} onClick={()=> props.getId(id)}></i>
            
        </div>
    </div>
    )
}
export default ContactCard 