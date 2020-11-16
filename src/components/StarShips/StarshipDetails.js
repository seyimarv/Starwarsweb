import React from 'react'


const StarshipDetails = ({name, View,  MGLT, cargo_capacity, consumables, crew, hyperdrive_rating, length, manufacturer, model, passengers, starship_class}) => {
 
  return  (
  
    <div onClick={View} className='container persondetails'>
        <div className='row'>
        <div className='col-10'>
         <p className='col-12 pt-3'>Name: {name}</p>
         <p className='col-12 pt-3'>MGLT: {MGLT}</p>
         <p className='col-12 pt-3'>Cargo-capacity: {cargo_capacity}</p>
         <p className='col-12 pt-3'>consumables: {consumables}</p>
         <p className='col-12 pt-3'>crew: {crew}</p>
         <p className='col-12 pt-3'>Hyperdrive-rating: {hyperdrive_rating}</p>
         <p className='col-12 pt-3'>lenght: {length}</p>
         <p className='col-12 pt-3'>manufacturer: {manufacturer}</p>
         <p className='col-12 pt-3'>model: {model}</p>
         <p className='col-12 pt-3'>passengers: {passengers}</p>
         <p className='col-12 pt-3'>starship-class: {starship_class}</p>
        </div>
         <div className='dropup pt-3'>
         <i className="dropdown-toggle col-2" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>

         </div>
        

        </div>
        </div>
        )
}







export default StarshipDetails