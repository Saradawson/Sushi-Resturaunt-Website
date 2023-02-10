import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const initialInfo = {
    firstName: '',
    lastName: '',
    phone: '',
}
function OrderOnline() {
    return (
        <div className='orderOnline-container'>
            <form>
                <label>First Name</label>
                <input 
                    type='text' 
                    name='firstName' 
                    placeholder='Enter first name'
                    min='4'
                    max='36'
                    required/>

                <label>Last Name</label>
                <input 
                    type='text' 
                    name='lastName' 
                    placeholder='Enter last name'
                    min='1'
                    max='36'
                    required/>

                <label>Phone Number</label>
                <input 
                    type="tel"  
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required/>

                <small>Format: 123-456-7890</small>          
            </form>
        </div>
    )
}

export default OrderOnline;