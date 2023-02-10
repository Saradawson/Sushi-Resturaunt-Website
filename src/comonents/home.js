import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpecialOffers from './specialOffers';

function Home() {
    let navigate = useNavigate();
    return (
        <div className='home-container'>
            <section>
                <div className='aboutUs-container'>
                    <h3>About Us!</h3>
                    <h6>something about us</h6> 
                </div>
                <div className='homeOrderOnline-container'>
                    <h3>Order Online Today!<br/>M-F<br/>10am-1am</h3>
                    <button
                        onClick={() => navigate('/orderOnline')}
                    >
                        Order Online
                    </button>
                </div>
            </section>
            <section>
                <SpecialOffers />
            </section>
        </div>
    )
}

export default Home;