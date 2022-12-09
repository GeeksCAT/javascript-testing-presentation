import { Socket } from "socket.io";
import { questions, Question } from "../questions";

let currentQuestion = 0;

let currentAnswers: Record<string, string[]> = {};

export const questionsData = (socket: Socket) => {
    socket.on('answer', (data: { username: string, answerId: number }) => {
        const answers = currentAnswers[data.answerId] ?? [];
        currentAnswers[data.answerId] = [data.username, ...answers];

        socket.broadcast.emit('currentAnswers', { 
            results: Object.keys(currentAnswers).reduce((acc, key) => {
                acc[key] = currentAnswers[key].length;
                return acc;
            }, {} as Record<string, number>), 
            totalVotes: Object.keys(currentAnswers).reduce((acc, key) => {
                return acc + currentAnswers[key].length;
            }, 0)
        });1
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
