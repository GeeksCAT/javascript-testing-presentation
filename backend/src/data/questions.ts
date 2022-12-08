import { Socket } from "socket.io";
import { questions, Question } from "../questions";

let currentQuestion = 0;

export const questionsData = (socket: Socket) => {
    socket.on('answer', (data: { username: string, answerId: number }) => {

    });
}

export const next = (): Question => {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }
    return questions[currentQuestion];
}
