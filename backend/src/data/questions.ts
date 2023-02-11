import { Socket, Server } from "socket.io";
import { questions, Question } from "../questions";

let currentQuestion = 0;

type CurrentAnswers = Record<string, string[]>;
let currentAnswers: CurrentAnswers = {};

export const questionsData = (socket: Socket, io: Server) => {
    socket.on('answer', (data: { username: string, answerId: number }) => {
        const answers = currentAnswers[data.answerId] ?? [];
        currentAnswers[data.answerId] = [data.username, ...answers];

        io.emit('results', { 
            results: calcResults(currentAnswers), 
            totalVotes: calcTotalVotes(currentAnswers)
        });
    });
}

export const setQuestion = (id: number): Question => {
    const question = questions.find(q => q.id === id);
    if(!question) return null;

    currentAnswers = question.answers.reduce((acc, answer) => {
        acc[answer.id] = [];
        return acc;
    }, {} as CurrentAnswers);
    return question;
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