import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
                <input type='text' name='firstName' />
                <label>Last Name</label>
                <input type='text' name='firstName' />          
            </form>
        </div>
    )
}

export default OrderOnline;