import openSocket from 'socket.io-client'
const { REACT_APP_WS_API_PORT, REACT_APP_WS_API_URL } = process.env
const socket = openSocket(`${REACT_APP_WS_API_URL}:${REACT_APP_WS_API_PORT}`)

export const saveDate = (date: string) => {
  socket.emit('saveDate', date)
}

export default socket
