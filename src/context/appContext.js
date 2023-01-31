import { io } from 'socket.io-client';
import React from 'react';
//http://localhost:5001
const SOCKET_URL = "https://pwachat-api.onrender.com";

export const socket = io(SOCKET_URL);
export const AppContext = React.createContext();