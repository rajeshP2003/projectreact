import React, {Component} from "react";

class Welcome extends Component{
    render(){
        console.log("hahahhahahha");
        return <div>
            <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
            {this.props.children}
        </div>
            //<h3>Welcome blahhh</h3>
        
    }
}

export default Welcome;