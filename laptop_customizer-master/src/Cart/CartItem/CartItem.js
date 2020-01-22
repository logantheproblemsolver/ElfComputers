import React, {Component} from 'react';



class CartItem extends Component {
    
    generateCart = () => {

        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            const currency = this.props.currency

            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {currency.format(selectedOption.cost)}
                </div>
 
              </div> 
            );
          });
        return summary
    }


    
    render() {

      const total = Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,
        0
      );
      const currency = this.props.currency

        return (

            <div>
                {this.generateCart()}
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

export default CartItem