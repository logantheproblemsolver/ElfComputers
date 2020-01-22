import React from 'react';
import CartItem from './CartItem/CartItem'
import CartTotal from './CartTotal/CartTotal'


class Cart extends React.Component {
    render() {
        return (
            <div>
                <CartItem currency={this.props.currency} selected={this.props.selected} features={this.props.features} />
                <CartTotal currency={this.props.currency} selected={this.props.selected} />
            </div>
        )
    }
}


export default Cart


