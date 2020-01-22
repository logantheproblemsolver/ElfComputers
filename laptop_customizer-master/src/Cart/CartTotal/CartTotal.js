import React from 'react';



class CartTotal extends React.Component {
    render() {

        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );

        const currency = this.props.currency


        return (
            <div>
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {currency.format(total)}
                </div>
                </div>
            </div>
        )
    }
}


export default CartTotal