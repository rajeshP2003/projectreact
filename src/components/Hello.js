import React from 'react';

const Hello = () =>{

    // return (
    //     <div className='header'>
    //         <h1>YO!</h1>
    //     </div>
    // )

   return React.createElement('div', null , React.createElement('h1',null,'yo!'))
}

export default Hello;