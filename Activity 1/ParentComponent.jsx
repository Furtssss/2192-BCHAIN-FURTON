//Mark Lemuel B. Furton WD-401

/*

import React from "react";
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const dataToPass = "Hello mga anak!";

    return(
        <ChildComponent message={dataToPass}/>
    );
}

export default ParentComponent;

*/


//Class Component
import React from "react";
import { render } from "react-dom";
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component{
    render(){
        const dataToPass = "Hello mga anak!";

        return(
            <ChildComponent message={dataToPass}/>
        );
    }
    
}

export default ParentComponent;