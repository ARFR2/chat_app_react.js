import React,{ Component } from "react";
import {USER_CONNECTED,LOGOUT} from "../Event";
import io from 'socket.io-client';
import LoginForm from "./LoginForm";

require('dotenv')
const socketUrl = `http://localhost:5000`
console.log(socketUrl)

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            socket:null,
            user:null
        };
    }

    componentWillMount() {
        this.initSocket();
    }

    initSocket = ()=>{
        const socket = io(socketUrl)
        socket.on('connect', ()=>{
            console.log("Connected")
        })

        this.setState({socket})
    }

    setUser =(user)=>{
        const { socket } = this.state;
        socket.emit(USER_CONNECTED);
        this.setState({user})
    }

    logout = ()=>{
        const { socket } =this.state;
        socket.emit(LOGOUT);
        this.setStat({user:null})
    }

    render() {
        const {title} = this.props;
        const {socket} = this.state
        return(
            <div className="container">
                <LoginForm socket={socket} setUser={this.setUser} />
            </div>
        );
    }
}

export default Layout