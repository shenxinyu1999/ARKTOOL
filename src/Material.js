import React from 'react';
import Box from '@material-ui/core/Box';
import Counter from './Counter';
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

    handleNeedChange = (value) => {
        this.setState({
            need: +value
        })
    }

    handleHaveChange = (value) => {
        this.setState({
            have: +value
        })
    }

    render() {
        const missing = Math.max(this.state.need - this.state.have, 0);

        return (
            <Box className="Material" display="inline-flex" flexDirection="column" p={1}>
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Box><img src={MTL_SKILL3} className="Material-logo" alt="MTL_SKILL3" height="50px"/></Box>
                    <Box><p>{this.props.name}</p></Box>
                    <Box>
                        <p>{missing}</p>
                        <MdCallMerge />
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Counter text="需要" value={this.state.need} handleCountChange={this.handleNeedChange}/>
                    &nbsp;&nbsp;
                    <Counter text="已有" value={this.state.have} handleCountChange={this.handleHaveChange}/>
                </Box>
            </Box>
        );
    }
}

export default Material