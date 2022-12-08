import { useData } from '../hooks/use-data'

export default function Question() {
  const { question } = useData()

  return (
    <div>
      <h1>{question?.title}</h1>
      <ul>
        {question?.answers.map((answer) => (
          <li key={answer.id}>{answer.text}</li>
        ))}
      </ul>
    </div>
  )
}
