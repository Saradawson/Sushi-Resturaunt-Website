import React, { useState } from 'react';

const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
}
const menuItems = [
    {id: 0, name: 'Family Feast', price: '$25.00', ordered: false},
    {id: 1, name: 'Lunch Special', price: '$9.00', ordered: false},
    {id: 2, name: 'Omasaka', price: '$100.00', ordered: false},
    {id: 3, name: 'The Perfect Pair', price: '$10.00', ordered: false},
    {id: 4, name: 'Creamy Deamy', price: '$10.00', ordered: false},
    {id: 5, name: 'Ocean\'s Delight', price: '$10.00', ordered: false}
]
function OrderOnline() {
    const [orderInfo, setOrderInfo] = useState(initialValues)
    const [items, setItems] = useState(menuItems)
    console.log(items)
    function handleChange(evt) {
        const { name, value, type, id } = evt.target
        if(type === 'checkbox'){
            const item = items.findIndex((x) => x.id === +id)
            const updatedItem = { ...items[item], ordered: evt.target.checked }
            const newItems = [...items]
            newItems[item] = updatedItem       
            setItems(newItems)
        }
        setOrderInfo({...orderInfo, [name]: value})
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const orders = items.filter((x) => x.ordered)
        
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
                        {items.map((item) => {
                            return(
                            <li key={item.id}>
                                <label>{item.name}, {item.price}</label>
                                <input
                                    type='checkbox'
                                    id={item.id}
                                    checked={item.ordered}
                                    onChange={handleChange}      
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