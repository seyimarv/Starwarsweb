import React from 'react'
import './personDetails.scss'


const PersonDetails = ({name, height, mass, hair_color, View, eye_color, gender, homeworld, skin_color, starships, vehicles}) => {

    return (
        <div onClick={View} className='container persondetails'>
        <div className='row'>
        <div className='col-10'>
         <p className='col-12 pt-3'>Name: {name}</p>
         <p className='col-12'>height: {height}</p>
         <p className='col-12'> mass: {mass}</p>
         <p className='col-12'>Hair color: {hair_color}</p>
         <p className='col-12'>Eye color: {eye_color}</p>
         <p className='col-12'>Gender: {gender}</p>
         <p className='col-12'>SkinColor: {skin_color}</p>
        </div>
         <div className='dropup pt-3'>
         <i className="dropdown-toggle col-2" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>

         </div>
        

        </div>
        </div>
    )
}







export default PersonDetails