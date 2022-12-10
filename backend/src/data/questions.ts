import { Socket } from "socket.io";
import { questions, Question } from "../questions";

let currentQuestion = 0;

type CurrentAnswers = Record<string, string[]>;
let currentAnswers: CurrentAnswers = {};

export const questionsData = (socket: Socket) => {
    socket.on('answer', (data: { username: string, answerId: number }) => {
        const answers = currentAnswers[data.answerId] ?? [];
        currentAnswers[data.answerId] = [data.username, ...answers];

        socket.broadcast.emit('currentAnswers', { 
            results: calcResults(currentAnswers), 
            totalVotes: calcTotalVotes(currentAnswers)
        });
    });
}

export const next = (): Question => {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }

    currentAnswers = {};

    return questions[currentQuestion];
}

/**
 * Calculates the total number of votes
 * 
 * @param ca current answers
 * @returns total number of votes
 */
export const calcTotalVotes = (ca: CurrentAnswers) => {
    return Object.keys(ca).reduce((acc, key) => {
        return acc + ca[key].length;
    }, 0);
}

/**
 * Calculates the number of votes per answer
 * 
 * @param ca current answers
 * @returns object with the number of votes per answer
 */
export const calcResults = (ca: CurrentAnswers) => {
    return Object.keys(ca).reduce((acc, key) => {
        acc[key] = ca[key].length;
        return acc;
    }, {} as Record<string, number>);
}