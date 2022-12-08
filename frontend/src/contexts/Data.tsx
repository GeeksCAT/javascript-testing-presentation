import React, { createContext, useEffect } from 'react'
import io from 'socket.io-client'

export interface DataContextType {}

export const DataContext = createContext<DataContextType>({})

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const socket = io('http://localhost:8080')

    socket.on('connect', () => {
      console.log('connected')
    })
  }, [])

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>
}
