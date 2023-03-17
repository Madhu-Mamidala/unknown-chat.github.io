import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import SideNavCSS from './SideNav.module.css';


const SideNav = () => {
    return (
        <>
                <div className="container d-grid fixed-bottom bg-dark p-2"> 
                    <nav className={`nav p-2 d-flex  justify-content-between justify-content-center px-2 mb-2  ${SideNavCSS.nav}`}>
                        <Link to='/home'><Icon.House size={'25'} color='white'></Icon.House></Link>
                        <Link to='/search'><Icon.Search size={'25'} color='white'></Icon.Search></Link>
                        <Link to='/chat'><Icon.ChatDots size={'25'} color='white'></Icon.ChatDots></Link>
                        <Link to='/settings'><Icon.Person size={'25'} color='white'></Icon.Person></Link>
                    </nav>
                </div> 
        </>
    );
}

export default SideNav;
