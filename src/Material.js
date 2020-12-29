import React from 'react';
import Box from '@material-ui/core/Box';
import Counter from './Counter';
import './css/Material.css';
import classNames from 'classnames';
import { MdCallMerge } from 'react-icons/md';
import MTL_SKILL3 from './image/MTL_SKILL3.png';

class Material extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            need: 0,
            have: 0
        };
    }

    render() {
        const missing = Math.max(this.props.need - this.props.have, 0);
        let className = classNames(
            'Material',
            {
                'rarity-white': this.props.rarity === 0,
                'rarity-green': this.props.rarity === 1,
                'rarity-blue': this.props.rarity === 2,
                'rarity-purple': this.props.rarity === 3,
                'rarity-gold': this.props.rarity === 4
            }
        );
        return (
            <Box className={className} display="inline-flex" flexDirection="column" p={1}>
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Box><img src={MTL_SKILL3} className="Material-logo" alt="MTL_SKILL3" height="50px"/></Box>
                    <Box><p>{this.props.name}</p></Box>
                    <Box>
                        <p>{missing}</p>
                        <MdCallMerge />
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Counter text="需要" value={this.props.need} handleCountChange={(value) => this.props.handleNeedChange(value)}/>
                    &nbsp;&nbsp;
                    <Counter text="已有" value={this.props.have} handleCountChange={(value) => this.props.handleHaveChange(value)}/>
                </Box>
            </Box>
        );
    }
}

export default Material