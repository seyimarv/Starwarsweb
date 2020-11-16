import React, {useState} from 'react'
import PlanetDetails from './PlanetDetails'



const Planet = ({name, climate, diameter, gravity , orbital_period, population, rotation_period, terrain, surface_water}) => {
    const [detail, setDetail] = useState(false)
  
    const ViewDetail = () => {
        setDetail(!detail)
    }

    return (
        <div>
{ detail ?
           <PlanetDetails 
            View={ViewDetail} name={name} climate={climate} diameter={diameter}
            gravity={gravity} orbital_period={orbital_period} population={population}
            rotation_period={rotation_period} terrain={terrain} surface_water={surface_water}
              /> : <div className='container pt-3' onClick={ViewDetail} > 
           <div className='row cards pt-3 mb-3'>
            <p className='col-10'>{name} </p>
            <i className="dropdown-toggle col-2" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           </i>
            </div>
            </div>
}
        </div>
    )

}





export default Planet