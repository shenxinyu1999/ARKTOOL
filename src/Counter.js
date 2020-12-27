import React from 'react';
import './css/Counter.css'
import { TiPlus, TiMinus } from 'react-icons/ti'

class Counter extends React.Component {
    handleMinus = () => this.props.handleCountChange(Math.max(this.props.value-1,0))

    handlePlus = () => this.props.handleCountChange(this.props.value+1);

    render() {
        return (
            <div>
                <div className="text">{this.props.text}</div>
                <TiMinus onClick={this.handleMinus}/>
                <input type="number" value={this.props.value} onChange={e => this.props.handleCountChange(e.target.value)}/>
                <TiPlus onClick={this.handlePlus}/>
            </div>
        );
    }
}

export default Counter