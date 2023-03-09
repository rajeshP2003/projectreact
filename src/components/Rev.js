import React,{Component} from "react";

class Rev extends Component {
    constructor(){
        super();
        this.state = {
            count : 1
        }
    }
    addCount(){
        this.setState({

            count : this.state.count +1,
            color : 
        })
    }
    render(){
        return(
            <div>
                <h1>This is a Component class</h1>
                {this.props.children}
                <button onClick={() => {this.addCount()}}><h1>Count++</h1></button>
                <h1>{this.state.count} is the count</h1>
            </div>
        )
    }
}

export default Rev;