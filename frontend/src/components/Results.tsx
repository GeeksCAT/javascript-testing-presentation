import { useMemo } from 'react'
import styled from 'styled-components'

import { useData } from '../hooks/use-data'
import Bar from './Bar'

const colors = [
  'hsl(322, 65.0%, 54.5%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(206, 100%, 50.0%)',
]

const ResultsContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Result = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  justify-content: flex-end;
`

const ResultVotes = styled.span`
  text-align: center;
  font-weight: 600;
`

const calculatePercentage = (count: number, total: number): number => {
  return Math.trunc((count / total) * 100)
}

export default function Results() {
  const { results: votes } = useData()

  const results = useMemo(() => Object.entries(votes.results).map(([id, v]) => ({
    value: calculatePercentage(v, votes.totalVotes),
    votes: v,
  })), [votes.results])

  return <ResultsContent> {results.map((r, i) => 
    <Result key={i}>
      <ResultVotes>{r.votes}</ResultVotes>
      <Bar value={r.value} color={colors[i]} />
      <ResultVotes>{i}</ResultVotes>
    </Result>)}
  </ResultsContent>
}
