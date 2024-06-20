import { userContext } from "../context/AuthContext";
import { useContext } from "react";

export const userAuthHook=()=>{
 return useContext(userContext)
} 
