import { useData } from '../hooks/use-data'

export default function Results() {
  const { currentAnswers } = useData()

  return (
    <div>
      {Object.entries(currentAnswers).map(([answerId, count]) => (
        <div key={answerId}>
          {answerId}: {count}
        </div>
      ))}
    </div>
  )
}
