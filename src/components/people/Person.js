import React, {useState} from 'react'
import PersonDetails from './Persondetails'

  

const Person = ({name, height, mass, hair_color, eye_color, gender, homeworld, skin_color, starships, vehicles}) => {
    const [details, setDetails] = useState(false)
  
    const View = () => {
        setDetails(!details)
    }

    return (
        <div>
{ details ?
           <PersonDetails 
            View={View} name={name} height={height} mass={mass}
            hair_color={hair_color} eye_color={eye_color} gender={gender} homeworld={homeworld}
            skin_color={skin_color} starships={starships} vehicles={vehicles}
              /> : <div className='container pt-3' onClick={View} > 
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




export default Person