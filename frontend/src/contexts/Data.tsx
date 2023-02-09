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

export interface CurrentAnswers {
  [answerId: string]: number
}

export interface Results {
  results: CurrentAnswers
  totalVotes: number
}

export interface DataContextType {
  users: string[]
  addUser: (user: string) => void
  question: Question | null
  sendAnswer: (answerId: number, username: string) => void
  currentAnswers: Results
}

export const DataContext = createContext<DataContextType>({
  users: [],
  addUser: () => {},
  question: null,
  sendAnswer: () => {},
  currentAnswers: {
    results: {},
    totalVotes: 0,
  },
})

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const socket = useRef<Socket>()
  const [users, setUsers] = useState<string[]>([])
  const [question, setQuestion] = useState<Question | null>(null)
  const [currentAnswers, setCurrentAnswers] = useState<Results>({
    results: {},
    totalVotes: 0,
  })

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

    socket.current.on('currentAnswers', (r: Results) => {
      console.log(r)
      setCurrentAnswers(r)
    })

    return () => {
      socket.current?.disconnect()
    }
  }, [])

  const addUser = (user: string) => {
    socket.current?.emit('login', user)
  }

  const sendAnswer = (answerId: number, username: string) => {
    console.log('send answer', answerId, username)
    socket.current?.emit('answer', { answerId, username })
  }

  return (
    <DataContext.Provider
      value={{ users, addUser, question, sendAnswer, currentAnswers }}
    >
      {children}
    </DataContext.Provider>
  )
}
