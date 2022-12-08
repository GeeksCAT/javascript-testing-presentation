import { Socket } from "socket.io";

interface User {
    id: string;
    name: string;
}

const users: User[] = [];

export const usersData = (socket: Socket) => {

    socket.on('disconnect', () => {
        console.log('user disconnected');
        users.splice(users.findIndex((user) => user.id === socket.id), 1);
        socket.broadcast.emit('users', users.map(u => u.name));
    });

    socket.on('login', (data: any) => {
        users.push({
            id: socket.id,
            name: data,
        });
        socket.broadcast.emit('users', users.map(u => u.name));
    });
}