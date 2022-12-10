import { Answer } from '../../contexts/Data'

export interface Question {
  id: number
  title: string
  correctAnswerId: string
  answers: Answer[]
}

export default async function questionLoader({
  params,
}: any): Promise<Question> {
  const question = await fetch(`http://localhost:8080/set/${params.questionId}`)

  return question.json()
}
