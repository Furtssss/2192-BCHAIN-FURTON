//Mark Lemuel B. Furton WD-401


import React from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [3],
        };
    }

    handleChange = (val) => {
        this.setState({ value: val });
    };

    render() {
        return (
            <ToggleButtonGroup type="checkbox" value={this.state.value} onChange={this.handleChange}>
                <ToggleButton id="tbg-btn-1" value={1}>
                    Clean Porch
                </ToggleButton>
                <ToggleButton id="tbg-btn-2" value={2}>
                    Wash Car
                </ToggleButton>
                <ToggleButton id="tbg-btn-3" value={3}>
                    Attend BCHAIN Class
                </ToggleButton>
            </ToggleButtonGroup>
        );
    }
}

export default TodoList;
