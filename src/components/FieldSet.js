
import React from 'react';
import ItemHash from './ItemHash';


    function FieldSet(props){
      //props object
      const {name,featureHash} = props

        return(

            <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
             {/*change feature to name*/}
              <h3>{name}</h3>
            </legend>
            {/*change options to feature*/}
            {feature}
          </fieldset>

        );
    }


    export default FieldSet;
  