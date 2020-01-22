import React from 'react';
import slugify from 'slugify';
import ListItem from './ListItems/ListItem'



class CustomizationList extends React.Component {

    render() {
    
        return (
            <div>
                <ListItem features={this.props.features} currency={this.props.USCurrencyFormat} updateFeature={this.props.updateFeature} selected={this.props.selected} />
            </div>
        )
    }
}

export default CustomizationList


