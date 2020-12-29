import React from 'react';
import Material from './Material'
import materials from './data/materials.json'

class MaterialPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return Object.values(materials).map((item) => {
            return <Material key={item.itemId} name={item.name} rarity={item.rarity}/>
        })
    }
}

export default MaterialPanel