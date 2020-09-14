const { v4: uuidv4 } = require('uuid');

const createUser = ({name=""} = {}) =>({
    id:uuidv4(),
    name
})


const createMessage = ({message="" , sender=""} = { }) => (
    {
        id: uuidv4(),
        time: new Date(Date.now()),
        message,
        sender
    }
)


const getTime = (date)=>{
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}


const createChat = ({messages=[], name="Community", users=[]} = {})=>(
    {
        id:uuidv4(),
        name,
        messages,
        typingUsers:[]
    }
)

module.exports = {
    createMessage,
    createChat,
    createUser
}