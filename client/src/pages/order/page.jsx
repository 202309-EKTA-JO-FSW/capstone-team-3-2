"use client";

import Head from 'next/head';
import { useState } from 'react';

export default function Order() {

  const [orderStatus] = useState([
    { id: 1, title: 'Almost there!', description: 'Preparing your order' },
    { id: 2, title: 'Done!', description: 'Your order is on its way!' },
    { id: 3, title: 'Delivered!', description: 'Order delivered!' },
  ]);

  const [deliveryLocation, setDeliveryLocation] = useState('');

  const handleLocationChange = (e) => {
    setDeliveryLocation(e.target.value);
  };

  const confirmLocation = () => {
    alert(`Delivery location set to: ${deliveryLocation}`);
  };

  return (
    <>
      <Head>
        <title>Order Status - Delicious Treat</title>
      </Head>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <header style={{ textAlign: 'center', margin: '20px 0' }}>
          <h1>DELICIOUS TREAT</h1>
        </header>
        <main style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{
            height: '200px',
            backgroundColor: '#f0f0f0',
            marginBottom: '20px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <input 
              type="text" 
              placeholder="Pick your delivery location" 
              value={deliveryLocation} 
              onChange={handleLocationChange} 
              style={{
                padding: '10px',
                marginBottom: '10px',
                width: '80%',
              }}
            />
            <button 
              onClick={confirmLocation} 
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '20px',
              }}
            >
              Confirm Location
            </button>
          </div>
          <section>
            <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '5px' }}>Order Status</h2>
            {orderStatus.map(status => (
              <div key={status.id} style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                <span style={{
                  display: 'inline-block',
                  width: '30px',
                  height: '30px',
                  lineHeight: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#000',
                  color: '#fff',
                  textAlign: 'center',
                  marginRight: '10px'
                }}>{status.id}</span>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 'bold' }}>{status.title}</span>
                    <span style={{ fontSize: '0.8em' }}>{status.description}</span>
                  </div>
                </div>
              </div>
            ))}
            <button style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Track</button>
            <p style={{ marginTop: '20px' }}>
              Your delicious treat will be there shortly! You can always come back here to track your order.
            </p>
            <button style={{
              display: 'block',
              backgroundColor: 'transparent',
              color: '#000',
              padding: '10px 20px',
              border: '2px solid #000',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px'
            }}>Hide status</button>
          </section>
        </main>
      </div>
    </>
  );
}