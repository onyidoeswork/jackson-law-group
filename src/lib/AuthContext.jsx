import React from 'react';
import { createContext, useContext } from 'react'

const AuthContext = createContext({
  user: null,
  loading: false,
  isAuthenticated: false,
  signIn: async () => {},
  signOut: async () => {},
})

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{
        user: null,
        loading: false,
        isAuthenticated: false,
        signIn: async () => {},
        signOut: async () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}