import React, { createContext, useState } from 'react'

export interface AuthContextType {
  user: string | null
  setUser: (user: string) => void
  removeUser: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  removeUser: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null)
  const removeUser = () => setUser(null)
  return (
    <AuthContext.Provider value={{ user, setUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  )
}
