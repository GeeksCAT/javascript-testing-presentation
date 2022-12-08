import React, { createContext, useEffect, useRef, useState } from 'react'
import io, { Socket } from 'socket.io-client'

export interface Answer {
  id: number
  text: string
}

export interface Question {
  id: number
  title: string
  answers: Answer[]
  correctAnswerId: number
}

export interface DataContextType {
  users: string[]
  addUser: (user: string) => void
  question: Question | null
}

export const DataContext = createContext<DataContextType>({
  users: [],
  addUser: () => {},
  question: null,
})

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const socket = useRef<Socket>()
  const [users, setUsers] = useState<string[]>([])
  const [question, setQuestion] = useState<Question | null>(null)

  useEffect(() => {
    console.log('data provider')
    socket.current = io('http://localhost:8080')

    socket.current.on('users', (users: string[]) => {
      console.log(users)
      setUsers(users)
    })

    socket.current.on('question', (question: Question) => {
      setQuestion(question)
    })
  }, [])

  const addUser = (user: string) => {
    socket.current?.emit('login', user)
  }

  return (
    <DataContext.Provider value={{ users, addUser, question }}>
      {children}
    </DataContext.Provider>
  )
}
