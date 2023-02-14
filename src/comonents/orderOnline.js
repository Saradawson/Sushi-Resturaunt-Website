import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
}
function OrderOnline() {
    const [orderInfo, setOrderInfo] = useState(initialValues)

    function handleChange(evt) {
        const {name, value} = evt.target;
        setOrderInfo((prev) => {
            return {...prev, [name]: value}
        })
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        
    }

    return (
        <div className='orderOnline-container'>
            <Router>
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input 
                        type='text' 
                        name='firstName' 
                        placeholder='Enter first name'
                        onChange={handleChange}
                        min='4'
                        max='36'
                        required/>

                    <label>Last Name</label>
                    <input 
                        type='text' 
                        name='lastName' 
                        placeholder='Enter last name'
                        onChange={handleChange}
                        min='1'
                        max='36'
                        required/>

                    <label>Phone Number</label>
                    <input 
                        type="tel"  
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        onChange={handleChange}
                        required/>

                    <small>Format: 123-456-7890</small>
                    <button type='submit'>Continue</button>          
                </form>
            </Router>
        </div>
    )
}

export default OrderOnline;