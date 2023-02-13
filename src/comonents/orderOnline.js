import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
}
function OrderOnline() {
    const { orderInfo, setOrderInfo } = useState(initialValues)

    
    return (
        <div className='orderOnline-container'>
            <form>
                <label>First Name</label>
                <input 
                    type='text' 
                    name='firstName' 
                    placeholder='Enter first name'
                    value={orderInfo.firstName}
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
                <button type='submit'>Continue</button>          
            </form>
        </div>
    )
}

export default OrderOnline;