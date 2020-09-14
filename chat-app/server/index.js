const app = require('http').createServer()
const io = module.exports.io = require('socket.io')(app)

require('dotenv').config();


const PORT = process.env.SERVER_PORT || 80;

const socketManager = require('./socketManager');

io.on('connect', socketManager);

app.listen(PORT, ()=>{
    console.log(`connected to port ${PORT}`);
})