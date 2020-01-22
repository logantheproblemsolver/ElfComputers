import React from 'react';
import slugify from 'slugify';



class ListItem extends React.Component {
    
  
    generateList = () => {
        const currency = this.props.currency
        console.log(currency)
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    onChange={e => this.props.updateFeature(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name}
                     ({currency.format(item.cost)})
                  </label>
                </div>
              );
            });
          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{features}</h3>
              </legend>
              {options}
            </fieldset>
          );

          });
    return features
        }
    render() {
        return (
            <div className="ListItem">
              {this.generateList()}
            </div>
        )
    }
}

export default ListItem