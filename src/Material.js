import React from 'react';
import Box from '@material-ui/core/Box';
import './css/Material.css'
import Counter from './Counter';
import { MdCallMerge } from 'react-icons/md';
import MTL_SKILL3 from './image/MTL_SKILL3.png';

class Material extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const missing = 0;

        return (
            <Box className="Material" display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row">
                    <img src={MTL_SKILL3} className="Material-logo" alt="MTL_SKILL3" />
                    <p>{this.props.name}</p>
                    <Box>
                        <p>{missing}</p>
                        <MdCallMerge />
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Counter />
                    <Counter />
                </Box>
            </Box>
        );
    }
}

export default Material