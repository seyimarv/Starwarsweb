import React from 'react'
import './explore.scss'
import {Link} from 'react-router-dom'
const Explore = () => {
    return (
        <div className='Explore pt-5'>
            <div className='container'>
             <div className='row pl-5'>
               <div className='col-lg-3 box1 mt-3 ml-4 mr-4'>
                <h3 className='title pt-3'>Planets</h3>
                <div className='picture1 mt-3 text-center'>
                    
                </div>
                <div className='link'>
                <Link to='/Planet'><button type="button" class="btn btn btn-sm mt-5">Explore planets</button></Link>
                </div>

               </div>
               <div className='col-lg-3 box2 ml-4 mt-3 mr-4'>
               <h3 className='title pt-3'>People</h3>
               <div className='picture2 mt-3'>

               </div>
               <div className='link'>
                <Link to='/People'><button type="button" class="btn btn btn-sm mt-5">Explore People</button></Link>
                </div>

                </div>
                <div className='col-lg-3 box3 ml-4 mt-3 mr-4'>
                <h3 className='title pt-3'>Starships</h3>
                <div className='picture3 mt-3'>

                </div>
                <div className='link'>
                <Link to='/starship'><button type="button" class="btn btn btn-sm mt-5">Explore Starships</button></Link>
                </div>


                </div>

             </div>

            </div>
        </div>
    )
}


export default Explore;