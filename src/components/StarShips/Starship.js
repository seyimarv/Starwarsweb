import React, {useState} from 'react'
import StarshipDetails from './StarshipDetails'



const Starship = ({name, MGLT, cargo_capacity, consumables, crew, hyperdrive_rating, length, manufacturer, model, passengers, starship_class}) => {
  const [data, setData]  = useState(false)


    const ViewData = () => {
        setData(!data)
    }

    return (
        <div>
        { data ? <StarshipDetails name={name} MGLT={MGLT} cargo_capacity={cargo_capacity} consumables={consumables} 
          crew={crew} hyperdrive_rating={hyperdrive_rating} length={length} manufacturer={manufacturer} model={model}
          passengers={passengers} starship_class={starship_class}
         View={ViewData} /> :
        
        <div className='container pt-3' onClick={ViewData} > 
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

export default Starship
