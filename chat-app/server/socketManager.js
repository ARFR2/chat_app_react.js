const io = require('./index').io;
const {VERIFY_USER, USER_CONNECTED, LOGOUT} = require('../src/Event');

const connectedUser = {};

module.exports = function (socket){
    console.log(`socket id: ${socket.id}`)
}

    socket.on(VERIFY_USER,)