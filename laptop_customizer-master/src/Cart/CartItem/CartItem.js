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

      

        return (

            <div>
                {this.generateCart()}
            </div>
        )

    }
}

export default CartItem