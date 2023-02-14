import React, { useState } from 'react';

const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    order: ''
}
const menuItems = [
    {id: 1, name: 'Family Feast', price: '$25.00', ordered: false},
    {id: 2, name: 'Lunch Special', price: '$9.00', ordered: false},
    {id: 3, name: 'Omasaka', price: '$100.00', ordered: false},
    {id: 4, name: 'The Perfect Pair', price: '$10.00', ordered: false},
    {id: 5, name: 'Creamy Deamy', price: '$10.00', ordered: false},
    {id: 6, name: 'Ocean\'s Delight', price: '$10.00', ordered: false}
]
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
                        placeholder='Enter phone number'
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        onChange={handleChange}
                        required/>
                        <small>Format: 123-456-7890</small>
                    
                    
                    <ul>
                        {menuItems && menuItems.map((item, index) => {
                            return(
                            <li key={item.id}>
                                <label>{item.name}, {item.price}</label>
                                <input
                                    type='checkbox'
                                    checked={item.ordered}
                                     />
                            </li>
                            )
                        })}
                    </ul>

                    <button type='submit'>Continue</button>
                </form>
        </div>
    )
}

export default OrderOnline;