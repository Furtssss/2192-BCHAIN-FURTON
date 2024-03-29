//Mark Lemuel B. Furton WD-401

/*

import React from "react";

function ChildComponent(props){
    return (
        <div>
            <p>{props.message}</p>
        </div>
    );
}

export default ChildComponent;

*/

//Class Component

import React from "react";
import { render } from "react-dom";


class ChildComponent extends React.Component{
    render(){
            return (
            <div>
                <p>{this.props.message}</p>
            </div>
        );
    }
    
}

export default ChildComponent;