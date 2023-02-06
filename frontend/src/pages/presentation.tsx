import { useLoaderData } from 'react-router-dom'

import Results from '../components/Results'
import Timer from '../components/Timer'
import { Question } from '../routes/loaders/question.loader'

export default function Presentation() {
  const question = useLoaderData() as Question

  return (
    <div>
      <Timer />
      <h1>{question.title}</h1>
      <div>
        {question.answers.map((answer) => (
          <div key={answer.id}>{answer.text}</div>
        ))}
      </div>
      <Results />
    </div>
  )
}