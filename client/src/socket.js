import { io } from 'socket.io-client';

const URL = 'http://3.37.139.165:8080';

export const socket = io(URL, {
  autoConnect: false,
});
