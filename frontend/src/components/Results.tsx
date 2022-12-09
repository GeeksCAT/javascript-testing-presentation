import styled from 'styled-components'

import { useData } from '../hooks/use-data'

const colors = [
  'hsl(322, 65.0%, 54.5%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(206, 100%, 50.0%)',
]

const ResultsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Result = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`

const ResultBar = styled.div`
  height: 40px;
`

export default function Results() {
  const { currentAnswers } = useData()

  const calculatePercentage = (count: number): string => {
    return Math.trunc((count / currentAnswers.totalVotes) * 100) + '%'
  }

  return (
    <ResultsList>
      {currentAnswers.results &&
        Object.entries(currentAnswers.results).map(
          ([answerId, count], index) => (
            <Result key={answerId}>
              <span>{answerId}</span>:{' '}
              <ResultBar
                style={{
                  width: calculatePercentage(count),
                  backgroundColor: colors[index],
                }}
              />
            </Result>
          ),
        )}
    </ResultsList>
  )
}
