import React,{Component} from "react";

class Message extends Component{

   constructor(){
    super()
    this.state = {
        message : 'Welcome Visitor!'
    }
   }

   changeMessage(){
    this.setState({
        message: 'Thanks for Subscribing!!!'
    }   
    )
   }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => {this.changeMessage()}}><h1>Subscribe</h1></button>
            </div>
        )
    }
}

export default Message;