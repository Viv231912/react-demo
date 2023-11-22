import { createContext, useCallback, useContext, useMemo, useState } from "react"
import FirebaseAuth from "../handlers/auth"


const { signIn, signOut }= FirebaseAuth
const Context = createContext()


const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    const login = useCallback(() => signIn().then(setCurrentUser),[]);
    const logout = useCallback(() => signOut().then(() => setCurrentUser(null)),[]);
    
    const value = useMemo(() => {
        
        return {
            login, 
            logout,  
            currentUser
        }
    }, [login, logout, currentUser])
    return <Context.Provider value={value}>{children}</Context.Provider>
}

//custom hook 
export const useAuthContext = () => {
    return useContext(Context)
}

export default AuthProvider