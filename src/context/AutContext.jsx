import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState, useEffect, useContext, createContext } from 'react'
import { auth } from '../../firebase'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const { children } = props
    const [ user, setUser ] = useState(null)
    const [globalData, setGlobalData] = useState(null)
    const [isLoading, setIsLoading ] = useState(false)
    
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        setUserState(null)
        setGlobalData(null)
        return signOut(auth)
    }
    
    const value = { user, globalData, setGlobalData, isLoading }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}