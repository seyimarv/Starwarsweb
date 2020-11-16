import React from 'react';
import './Home.scss'
import {Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home pb-0 pt-4'>
          <div className='container con'>
            <div className='row'>
            <div className='col'>
              <nav className="fixed navbar navbar-expand-sm ">
              <div className="container">
              <div className="navbar-brand star">Star wars</div>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fas fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <div className="nav-item nav-link active" to="/">People</div>
                            <div className="nav-item nav-link" to="/signin">Planets</div>
                            <div className="nav-item nav-link" to="/signup">Starships</div>
                        </div>

                        </div>
                    </div>  
                </nav>
                </div>
               
               </div>
               <div className='row'>
                 <div className='col-sm-12 col-md-6 col-lg-6 pl-5'>
                    <h3 className='plan pt-5'>
                        Quick way to find your favorite star wars Planets, People, and Starships
                    </h3>
                    <Link to='/Explore' ><button type="button" class="btn btn btn-lg mt-5">Explore</button></Link>
                     
                 </div>


    
              </div>
            </div>
         </div>
    )
}


export default Home