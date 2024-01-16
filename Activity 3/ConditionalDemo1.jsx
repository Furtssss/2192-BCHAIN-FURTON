import React from "react";

function Greeting(){
    return(
        <h1>Hello! I am standard function.</h1>
    )
}

const ArrowGreeting = () => (
    <h1>Hello! I am an arrow function.</h1>
)



function ShinyButton(){
    const handleClick = () => {

    }
    return(
        <button onClick={handleClick}>
            Click this button!
        </button>
    )
}

export default ShinyButton;