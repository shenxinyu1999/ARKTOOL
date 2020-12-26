import React from 'react';
import './css/Counter.css'
import { TiPlus, TiMinus } from 'react-icons/ti'

class Counter extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
                <TiMinus onClick={this.props.handleMinus}/>
                <input type="number" onChange={this.props.handleCountChange}/>
                <TiPlus onClick={this.props.handlePlus}/>
            </div>
        );
    }
}

export default Counter