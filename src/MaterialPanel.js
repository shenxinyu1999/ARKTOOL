import React from 'react';
import Material from './Material'
import materials from './data/materials.json'

class MaterialPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        Object.keys(materials).forEach((id) => {
            this.state[id] = {
                need: 0,
                have: 0
            }
        });
    }

    handleNeedChange = (id, value) => {
        const needOld = this.state[id].need;
        this.setState({
            [id]: {
                need: +value,
                have: this.state[id].have
            }
        });
        materials[id].buildingProductList.forEach((mat) => {
            const matNeed = this.state[mat.id].need;
            const matNeedChange = (value - needOld) * mat.count;
            this.handleNeedChange(mat.id, matNeed + matNeedChange);
        });
    }

    handleHaveChange = (id, value) => {
        this.setState({
            [id]: {
                need: this.state[id].need,
                have: +value
            }
        });
    }

    render() {
        return Object.values(materials).map((item) => {
            return (<Material 
                key={item.itemId} 
                name={item.name} 
                rarity={item.rarity}
                need={this.state[item.itemId].need}
                have={this.state[item.itemId].have}
                handleNeedChange={(value) => this.handleNeedChange(item.itemId, value)}
                handleHaveChange={(value) => this.handleHaveChange(item.itemId, value)}
            />)
        })
    }
}

export default MaterialPanel