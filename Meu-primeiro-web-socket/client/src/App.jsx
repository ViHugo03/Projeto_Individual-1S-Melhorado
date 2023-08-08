import './App.css'
import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';

function App() {

  const [socketIo, setSocketIo] = useState(null);

  const [mensagens, setMensagens] = useState([]);
  const [mensagem, setMensagem] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3000');

    setSocketIo(socket);

    socket.on('connect', () => {
      console.log('Conectado');
    });

    socket.on("novaMensagem", (mensagem) => {
      setMensagens([[...mensagens], mensagem]);
    })

    return () => {
      socket.disconnect();
    }

  }, [])

  return (
    <>
      <h2>Tela De Jogo</h2>

      {mensagens.map((mensagem, index) => (
        <p key={index}>{mensagem}</p>
      ))}
      <input type="text"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />

      <button onClick={() => {
        socketIo.emit('enviarMensagem', mensagem);
      }}>
        MANDAR MENSAGEM
      </button>
    </>
  )
}

export default App
