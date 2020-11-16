import React from 'react'
import Person from './Person'
import './peoplearray.scss'

const PeopleArray = ({peopleArray}) => {
return (
 
 <div className='peoples container pt-5'>
 <div className='row'>
 <div className='col-2'></div>
 <div className='col-8'>
     {
         peopleArray.map(({name, ...otherProps}) => (
           
             <Person  key={name} {...otherProps} name={name} />
           
         ))
     }
 </div>
 </div>
 </div>

)
}




export default PeopleArray