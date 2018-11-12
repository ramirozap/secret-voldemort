const io = require('socket.io')()
const admin = require('firebase-admin')
const { PORT, FIREBASE_URL } = process.env

var serviceAccount = require('../serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: FIREBASE_URL,
})

const db = admin.database()
const ref = db.ref('games')

io.on('connection', socket => {
  console.log(`client ${socket.id} connected`)
  socket.on('saveDate', date => {
    console.log(date)
    ref.push(date)
  })
  socket.on('disconnect', () => {
    console.log(`client ${socket.id} disconnected`)
  })
})

io.listen(PORT)
console.log(`listening on port ${PORT}...`)
