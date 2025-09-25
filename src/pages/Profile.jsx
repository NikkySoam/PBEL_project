import React from 'react';
import '../css/profile.css'
import { NavLink } from 'react-router';

function Profile() {
  const user = {
    username: 'Nikky',
    phone: '+91 0000000000',
    email: 'soam111@gmail.com',
    location: 'c-31,sector-18, Noida, India',
    orders: [
      { id: 1, item: 'Pizza', status: 'Delivered' },
      { id: 2, item: 'Biryani', status: 'Pending' },
    ],
   
  };

  return (
    <section className="profile-section">
      <div className="profile-container">
        <h1>User Profile</h1>

        <div className="user-info">
          <h2>Personal Info</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.location}</p>
        </div>

        <div className="user-orders">
          <h2>Orders</h2>
          {user.orders.length > 0 ? (
            <ul>
              {user.orders.map(order => (
                <li key={order.id}>
                  {order.item} - <span className={order.status.toLowerCase()}>{order.status}</span>
                </li>
              ))}
            </ul>
          ) : <p>No orders yet.</p>}
        </div>
         <NavLink to="/cart">My Cart</NavLink>
      
      </div>
    </section>
  );
}

export default Profile;
