import React, {useState, useEffect} from 'react'

import PeopleArray from './PeopleArray';

const People = () => {
     const [peopleArray, setPeopleArray ] = useState([])
     const [people, setPeople] = useState()

      const url = (`https://swapi.dev/api/people/`)
     useEffect(() => {
        fetch(url)
        .then(res => res.json() )
        .then(result => {
            const people = result.results;

            const fetchedPeople = [];
            people.forEach(doc => {
                const fetchedPerson = {
                    ...doc
                };
                setPeople(fetchedPerson)
                fetchedPeople.push(fetchedPerson)
                
                
            })
            setPeopleArray(fetchedPeople)
            
        })
     }, [])
     console.log(peopleArray)  
     console.log(people) 
    return(
        <div className='page'>
            <PeopleArray peopleArray={peopleArray} people={people}/>
        </div>
    )
}
















export default People