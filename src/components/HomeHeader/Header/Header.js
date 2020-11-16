import React, {useState} from 'react'
import './Header.scss'



const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div className='header'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <div className='container'>
                <h1 className='nav-title'>Creatorprofile</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    
                    <p className='nav-item pl-2'>Home </p> <span class="sr-only">(current)</span>
                    <div className='navbar-nav'>
                      <p className='nav-item'>Log in</p>
                      <p className='nav-item'>Sign up</p>
                    </div>
                    
                   
                    <div className='navbar-nav'>
                  <p className='nav-item'>Profile</p>

                    </div> 
                    
                    </div>
                </div>
              </div>
        </nav>

        </div>
    )
}






export default Header;