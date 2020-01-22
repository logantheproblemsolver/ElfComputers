import React from 'react';
import ListItem from './ListItems/ListItem'



class CustomizationList extends React.Component {

    render() {
    
        return (
            <div className="CustomizationList">
                <ListItem features={this.props.features} currency={this.props.currency} updateFeature={this.props.updateFeature} selected={this.props.selected} />
            </div>
        )
    }
}

export default CustomizationList


