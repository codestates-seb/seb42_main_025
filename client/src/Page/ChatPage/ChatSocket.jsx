import { useState, useEffect } from 'react';
import { socket } from 'socket';
import { ConnectionState } from 'Components/sockets/ConnectionState';
import { ConnectionManager } from 'Components/sockets/ConnectionManager';
import { MyForm } from 'Components/sockets/MyForm';
import { Events } from 'Components/sockets/Events';
import { Container } from 'Container/Container';

export default function ChatSocket() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  console.log(isConnected);
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  return (
    <Container>
      <div>
        <ConnectionState isConnected={isConnected} />
        <Events events={fooEvents} />
        <ConnectionManager />
        <MyForm />
      </div>
    </Container>
  );
}
