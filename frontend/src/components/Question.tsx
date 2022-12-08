import styled from 'styled-components'

import { useData } from '../hooks/use-data'
import Button from './Button'

const QuestionTitle = styled.h1`
  margin-bottom: 2rem;
`

const AnswersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export interface QuestionProps {
  onAnswer?: (answerId: number) => void
}

export default function Question({ onAnswer }: QuestionProps): JSX.Element {
  const { question } = useData()

  const handleAnswer = (answerId: number) => {
    if (onAnswer) onAnswer(answerId)
  }

  return (
    <div>
      <QuestionTitle>{question?.title}</QuestionTitle>
      <AnswersList>
        {question?.answers.map((answer) => (
          <Button key={answer.id} onClick={() => handleAnswer(answer.id)}>
            {answer.text}
          </Button>
        ))}
      </AnswersList>
    </div>
  )
}
