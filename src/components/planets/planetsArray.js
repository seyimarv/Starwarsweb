import React from 'react'
import Planet from './planet'


const PlanetArray = ({planetArray}) => {
    return (
     <div className='peoples container pt-5'>
     <div className='row'>
     <div className='col-2'></div>
     <div className='col-8'>
         {
             planetArray.map(({name, ...otherProps}) => (
               
                 <Planet  key={name} {...otherProps} name={name} />
               
             ))
         }
     </div>
     </div>
     </div>
    )
    }





export default PlanetArray