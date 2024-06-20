import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/FirebaseConfig';

export const checkPaymentStatus = async (user) => {
  if (!user) return false;

  try {
    // Create a reference to the payments collection for the current user
    const collectionRef = collection(db, 'customers', user.uid, 'payments');

    // Create a query to find documents where status is 'succeeded'
    const q = query(collectionRef, where('status', '==', 'succeeded'));

    // Execute the query and get the documents
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Log details of each succeeded payment
      querySnapshot.forEach((doc) => {
        console.log('Succeeded payment found:', doc.data());
      });

      return true;
    }

    return false;
  } catch (error) {
    console.error('Error checking payment status:', error);
    return false;
  }
};
