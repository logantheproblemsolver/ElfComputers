import React from 'react';
import CartItem from './CartItem/CartItem'


class Cart extends React.Component {
    render() {
        return (
            <div>
                <CartItem currency={this.props.currency} selected={this.props.selected} features={this.props.features} />
            </div>
        )
    }
}


export default Cart


