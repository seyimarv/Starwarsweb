import React, {useState, useEffect} from 'react'

import StarshipArray from './starshipArray'


const Starships = () => {
    const [starshipArray, setStarshipArray ] = useState([])
  

      const url = (`https://swapi.dev/api/starships/`)
     useEffect(() => {
        fetch(url)
        .then(res => res.json() )
        .then(result => {
            const starship = result.results;

            const fetchedStarships = [];
            starship.forEach(doc => {
                const fetchedStarship = {
                    ...doc
                };
                fetchedStarships.push(fetchedStarship)
                
                
            })
            setStarshipArray(fetchedStarships)
            
        })
     }, [])
  console.log(starshipArray)
 




    return (
        <div className='page'>
          <div>
            <StarshipArray starshipArray={starshipArray} />
          </div>
        </div>
    )
}


export default Starships