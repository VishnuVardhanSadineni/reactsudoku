import React from 'react';
import Cell from './Cell';

class Row extends React.Component{
    render(){
        const row = this.props.values;
        return (
            row.map((curValue, index) => (
                <td key={(this.props.row * 10) + index}>
                    <Cell 
                        fixed_value={this.props.fixedValuesRow[index]} 
                        value={curValue} 
                        row={this.props.row} 
                        column={index} 
                        handleCellSelect={this.props.handleCellSelect} 
                        selected={(this.props.row === this.props.selectedRow && index === this.props.selectedColumn) ? true : false}
                    />
                </td>
            ))
        );
    }
}

export default Row;