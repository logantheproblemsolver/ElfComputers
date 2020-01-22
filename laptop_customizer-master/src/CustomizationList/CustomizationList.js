import React from 'react';
import ListItem from './ListItems/ListItem'



class CustomizationList extends React.Component {

    render() {
    
        return (
            <div className="CustomizationList">
                <form className="main__form">
                    <h2>Customize your laptop</h2>
                    <ListItem features={this.props.features} currency={this.props.currency} updateFeature={this.props.updateFeature} selected={this.props.selected} />
                </form>
            </div>
        )
    }
}

export default CustomizationList


