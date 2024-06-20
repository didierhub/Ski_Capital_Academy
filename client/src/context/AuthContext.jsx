import { createContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    sendEmailVerification ,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut ,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { doc, setDoc, getFirestore,getDoc } from "firebase/firestore";
import { auth } from "../firebase/FirebaseConfig";

export const userContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const db = getFirestore();
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
    
            // Fetch user's display name from Firestore if user is logged in
            if (currentUser) {
                let displayName = currentUser.displayName; // Default to Google display name
    
                if (currentUser.uid) {
                    const userDocRef = doc(getFirestore(), "users", currentUser.uid);
                    const userDocSnapshot = await getDoc(userDocRef);
    
                    if (userDocSnapshot.exists()) {
                        const userData = userDocSnapshot.data();
                        displayName = userData.displayName || displayName; // Use Firestore display name if available
                    }
                }
    
                setUser((prevUser) => ({
                    ...prevUser,
                    displayName: displayName
                }));
            }
        });
    
        return () => unsubscribe();
    }, []);
    


const GoogleSignIn=()=>{

    const provider= new GoogleAuthProvider()
    signInWithPopup(auth,provider)
  
}
// / creat user
    // const createUser = (email, password) => {
    //     return createUserWithEmailAndPassword(auth, email, password);
    // };
    const createUser = async (email, password, firstName, lastName) => {
        const displayName = `${firstName} ${lastName}`;
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
    
            // Set the display name for the user
            await setDoc(doc(db, "users", user.uid), {
                displayName: displayName
            });
    
            // Send email verification
            await sendEmailVerification(user);
    
            return userCredential;
        } catch (error) {
            throw error;
        }
    };

    // user log in
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
// user log out
    const logoutUser = () => {
        return signOut(auth);
    };

    return (
        <userContext.Provider
            value={{
                user,
                createUser,
                loginUser,
                logoutUser,
                GoogleSignIn
            }}
        >
            {children}
        </userContext.Provider>
    );
};
