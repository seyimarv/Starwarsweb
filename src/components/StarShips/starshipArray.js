import React from 'react'
import Starship from './Starship'


const StarshipArray = ({starshipArray}) => {
    return (
      
     <div className='peoples container pt-5'>
     <div className='row'>
     <div className='col-2'></div>
     <div className='col-8'>
         {
             starshipArray.map(({name, ...otherProps}) => (
               
                 <Starship  key={name} {...otherProps} name={name} />
               
             ))
         }
     </div>
     </div>
     </div>
     
    )
    }





export default StarshipArray