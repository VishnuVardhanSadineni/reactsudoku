import React from "react";
import KeypadCell from "./KeypadCell";

class Keypad extends React.Component{
    render(){
        const numbers = ["1","2","3","4","5","6","7","8","9"];
        return (
            <div>
                {numbers.map((curValue, index) => (
                    <KeypadCell 
                        value={curValue} 
                        key={(11 * 10) + index} 
                        handleEnterVal={this.props.handleEnterVal}
                    />
                ))}
            </div>
        );
    }
}

export default Keypad;