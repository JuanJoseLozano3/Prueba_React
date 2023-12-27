import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {SidebarData} from "./InformacionBarra";
import "./BarraLateral.css";
import {IconContext} from 'react-icons'
import pc from '../assets/images/pcl1.png'

function BarraLateral(){

    const [sidebar, setSidebar]=useState(false)
    const showSidebar=()=>setSidebar(!sidebar) 

    return(
    <>
    <IconContext.Provider value={{color:'#000'}}>
        <div className="navbar">
            <header className='menu-bars'>
                <img src={pc} onClick={showSidebar}/>
            </header>
        </div>
        <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                <div>
                    <header className='navbar'>
                    <p>
                        <img src={pc}/>
                        Solutions App
                    </p>
                    </header>
                </div>
                </li>
                {SidebarData.map((item, index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        
    </IconContext.Provider>
    </>
    )
}

export default BarraLateral