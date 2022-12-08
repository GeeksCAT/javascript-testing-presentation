export interface Question {
    id: number;
    title: string;
    answers: Answer[];
    correctAnswerId: number;
}

export interface Answer {
    id: number;
    text: string;
}

export const questions: Question[] = [
    {
        id: 1,
        title: 'What is the capital of France?',
        answers: [
            { id: 1, text: 'Paris' },
            { id: 2, text: 'London' },
            { id: 3, text: 'Berlin' },
            { id: 4, text: 'Madrid' }
        ],
        correctAnswerId: 1
    },
    {
        id: 2,
        title: 'Who is CEO of Tesla?',
        answers: [
            { id: 1, text: 'Jeff Bezos' },
            { id: 2, text: 'Elon Musk' },
            { id: 3, text: 'Bill Gates' },
            { id: 4, text: 'Tony Stark' }
        ],
        correctAnswerId: 2
    },
];
