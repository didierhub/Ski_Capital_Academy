import  { useState, useEffect } from "react";
import { userAuthHook } from "../hook/UserHook";// Assuming you've exported the userContext from your AuthContext file


function WecomeBack() {
    const { user } = userAuthHook();
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (user) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 3000); // Adjust the timeout as needed (e.g., 3000 milliseconds for 3 seconds)
        }
    }, [user]);

    return (
        <div>
            {showMessage && (
                <div className="popup">
                    <p className=" text-purple-700">Welcome back, {user.displayName }!</p>
                </div>
            )}
        </div>
    );
}

export default WecomeBack



