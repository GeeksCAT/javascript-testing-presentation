import React, { createContext, useEffect, useRef, useState } from 'react'
import io, { Socket } from 'socket.io-client'

export interface DataContextType {
  users: string[]
  addUser: (user: string) => void
}

export const DataContext = createContext<DataContextType>({
  users: [],
  addUser: () => {},
})

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const socket = useRef<Socket>()
  const [users, setUsers] = useState<string[]>([])

  useEffect(() => {
    socket.current = io('http://localhost:8080')

    socket.current.on('connect', () => {
      console.log('connected')
    })

    socket.current.on('users', (users: string[]) => {
      console.log(users)
      setUsers(users)
    })
  }, [])

  const addUser = (user: string) => {
    socket.current?.emit('login', user)
  }

  return (
    <DataContext.Provider value={{ users, addUser }}>
      {children}
    </DataContext.Provider>
  )
}
