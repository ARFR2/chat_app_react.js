const io = require('./index').io;
const {VERIFY_USER, USER_CONNECTED, LOGOUT} = require('../src/Event');

const { createMessage, createUser, createChat} = require('../src/Factories');

let connectedUser = [];

module.exports = function (socket) {
    console.log(`socket id: ${socket.id}`)

    //Verify Username
    socket.on(VERIFY_USER, (nickname, callback) => {
        if (isUser(connectedUser, nickname)) {
            callback({isUser:true, user: null})
        } else {
            callback({isUser:false, user: createUser({name: nickname})})
        }
    })

    //User connected with Username
    socket.on(USER_CONNECTED, (user)=>{
        connectedUser = addUser(connectedUser, user);
        socket.user = user;

        io.emit(USER_CONNECTED, connectedUser);
        console.log(connectedUser);
    })

}

function addUser(userList,user){
    let newList = Object.assign({}, userList);
    newList[user] = user;
    return newList;
}





function removeUser(userList, username){
    let newList = Object.assign({},userList);
    delete newList[username];
    return newList
}


function isUser(userList, username){
    console.log(userList);
    console.log(username in userList);
    return username in userList
}



