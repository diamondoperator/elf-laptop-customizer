import React from 'react'
import USCurrencyFormat from './UsCurrency';
import slugify from 'slugify';


function ItemHash(props){

  //an object containing keys for props
  const {itemHash, item, feature} = props;
  return(

      <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}

        // original line checked={item.name === this.state.selected[feature].name}
        checked={item.name === props.selected[feature].name}
        
        //props in front of updatedfeature
        onChange={e => props.updateFeature(feature,item)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
      </div>

  );
  
  }
  
  
  export default ItemHash;
