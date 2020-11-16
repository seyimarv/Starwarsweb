import React, {useState, useEffect} from 'react'
import PlanetArray from './planetsArray'


const Planets = () => {
    const [planetArray, setPlanetArray ] = useState([])
  

      const url = (`https://swapi.dev/api/planets/`)
     useEffect(() => {
        fetch(url)
        .then(res => res.json() )
        .then(result => {
            const planet = result.results;

            const fetchedPlanets = [];
            planet.forEach(doc => {
                const fetchedPlanet = {
                    ...doc
                };
                fetchedPlanets.push(fetchedPlanet)
                
                
            })
            setPlanetArray(fetchedPlanets)
            
        })
     }, [])
  console.log(planetArray)



    return (
        <div>
          <div>
            <PlanetArray planetArray={planetArray} />
          </div>
        </div>
    )
}


export default Planets