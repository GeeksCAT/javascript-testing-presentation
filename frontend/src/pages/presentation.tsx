import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components'

import Results from '../components/Results'
import { Question as QeustionType } from '../routes/loaders/question.loader'

const PresentationContainer = styled.div`
  margin: 50px;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
`

const QuestionTitle = styled.h2`
  margin-bottom: 10px;
`

const QuestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Question = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export default function Presentation() {
  const question = useLoaderData() as QeustionType

  return (
    <PresentationContainer>
      <QuestionTitle>{question.title}</QuestionTitle>
      <QuestionsList>
        {question.answers.map((answer) => (
          <Question key={answer.id}>
            {answer.id} <h3>{answer.text}</h3>
          </Question>
        ))}
      </QuestionsList>
      <Results />
    </PresentationContainer>
  )
}
