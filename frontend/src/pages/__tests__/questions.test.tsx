import { render, screen } from '@testing-library/react'
import { DataContext } from '../../contexts/Data'

import Questions from '../questions'

const dataProviderValue = {
    users: [],
    addUser: () => { },
    question: {
        id: 1,
        title: "What's the best programming language?",
        answers: [
            {
                id: 1,
                text: 'JavaScript',
            },
            {
                id: 2,
                text: 'Python',
            },
            {
                id: 3,
                text: 'Java',
            },
            {
                id: 4,
                text: 'C++',
            },
        ],
        correctAnswerId: 1
    },
    sendAnswer: () => { },
    results: {
        results: {},
        totalVotes: 0,
    },
}

const renderWithContext = (ui: React.ReactElement) => {
    return render(
        <DataContext.Provider value={dataProviderValue}>
            {ui}
        </DataContext.Provider>
    )
}

test('renders a question with title', () => {
    renderWithContext(
        <Questions />
    )
    const questionTitle = screen.getByText(/What's the best programming language?/i)
    expect(questionTitle).toBeInTheDocument()
})
