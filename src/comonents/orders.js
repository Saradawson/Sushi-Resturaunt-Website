import React from 'react';

const Orders = (props) => {
    const { orders } = props
    return(
        <div className='orders-container'>
            {orders.map((order, idx) => (
                <div key={idx} className='order-container'>
                    <h3>{order.firstName}</h3>
                    <h6>{order.order}</h6>
                    <h6>{`$${order.total}.00`}</h6>
                </div>
            ))}
        </div>
    )
}

export default Orders
