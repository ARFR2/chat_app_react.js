import React,{ Component } from "react";
import io from 'socket.io-client'

require('dotenv')
const socketUrl = `http://localhost:5000`
console.log(socketUrl)

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            socket:null
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

    render() {
        const {title} = this.props;
        return(
            <div className="container">
                {title}
            </div>
        );
    }
}

export default Layout