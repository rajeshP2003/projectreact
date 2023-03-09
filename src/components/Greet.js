import React from "react"

const Greet = (props) => {
    console.log(props);
    return <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.children}
    </div>
}
export default Greet;

//not how prop or values are passed///
// const Greet = (prop) => {
//     return <h1>Hello Gosu /+ {prop.name}</h1>
// }

// my try at arrow func
// const Greet = () => {
//     console.log("Yo gosu");
//     return <h1>Hello Gosu</h1>;
// }

//because this is a functional Component Class, we should use ES^ arrow functions
// function Greet(){
//     console.log("Yo Gosu");
//     return <h1>Hello Gosu</h1>
// }