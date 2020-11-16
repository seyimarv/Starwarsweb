import React from 'react'






const PlanetDetails = ({name, View, climate, diameter, gravity , orbital_period, population, rotation_period, terrain, surface_water}) => {
    return (
        <div onClick={View} className='container persondetails'>
        <div className='row'>
        <div className='col-10'>
         <p className='col-12 pt-3'>Name: {name}</p>
         <p className='col-12'>Climate: {climate}</p>
         <p className='col-12'> Diameter: {diameter}</p>
         <p className='col-12'>Gravity: {gravity}</p>
         <p className='col-12'>Orbitalperiod: {orbital_period}</p>
         <p className='col-12'>Population: {population}</p>
         <p className='col-12'>Rotationperiod: {rotation_period}</p>
         <p className='col-12'>Terrain: {terrain}</p>
         <p className='col-12'>SurfaceWater: {surface_water}</p>
        </div>
         <div className='dropup pt-3'>
         <i className="dropdown-toggle col-2" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>

         </div>
        

        </div>
        </div>
    )
}

export default PlanetDetails