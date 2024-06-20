// services/checkout.js
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/FirebaseConfig';

export const createCheckoutSession = async (user) => {
  if (!user) {
    console.error("User is not authenticated");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, 'customers', user.uid, 'checkout_sessions'), {
      price: 'price_1PJGXN2K5KG8pJifmLzDKp5E', // Replace with your one-time price ID
      mode: 'payment', // Ensure mode is set to payment for one-time payments
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const { error, url } = data || {};

      if (error) {
        alert(`An error occurred: ${error.message}`);
      } else if (url) {
        window.location.assign(url);
      }
    });
  } catch (error) {
    console.error("Error creating checkout session: ", error);
    alert("Failed to create checkout session.");
  }
};
