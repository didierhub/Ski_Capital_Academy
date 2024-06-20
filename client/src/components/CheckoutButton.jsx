import React from 'react';
import { userAuthHook } from '../hook/UserHook';
import { useNavigate } from 'react-router-dom';
import { createCheckoutSession } from '../payment/CreatCheckoutPoint';



function CheckoutButton({action}) {
  const navigate = useNavigate();
  const { user } = userAuthHook();

  const handleCheckout = async () => {
    if (user) {
      try {
        await createCheckoutSession(user);
      } catch (error) {
        console.error("Checkout session creation failed:", error);
        alert("There was an error with the checkout. Please try again.");
      }
    } else {
      alert("Please sign in to proceed with checkout.");
      navigate('/login'); // Redirect to login page
    }
  };

  return (
    <div>
      <button onClick={handleCheckout} className="rounded-md text-white py-1 px-2 bg-purple-500 hover:scale-105">
              {action? `${action}`:"start now"}
      </button>
    </div>
  );
}

export default CheckoutButton;
