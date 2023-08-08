import express from "express";
import { Server } from "socket.io";

const app = express();

const server = app.listen(3000, () => {
    console.log("Server started (http://localhost:3000/) !");
});

const servidorIo = new Server(server, {
    cors: {
        origin: "*"
    }
});

servidorIo.on("connection", (socketUser) => {
    console.log("Nova pessoa conectada!");

    socketUser.on("disconnect", () => {
        console.log("Pessoa desconectada!");
    });

    socketUser.on("enviarMensagem", (mensagem) => {
        servidorIo.emit("novaMensagem", mensagem);
    })
})