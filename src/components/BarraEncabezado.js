import React, {Component} from 'react';
import { MenuItems } from "./MenuItems"
import './BarraEncabezado.css'
import pc from '../assets/images/pcl1.png'
import "./BarraLateral.css";
import { Link } from 'react-router-dom';
import {SidebarData} from "./InformacionBarra";
import {IconContext} from 'react-icons'
import * as RiIcons from "react-icons/ri";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Trabajadores from '../Paginas/Trabajadores'
import Ausentismo from '../Paginas/Ausentismo'
import Accidentalidad from '../Paginas/Accidentalidad'
import Vacunacion from '../Paginas/Vacunacion'
import Administrar from '../Paginas/Administrar'

class BarraEncabezado extends Component{
    
    state = {click: true}
    showSidebar =()=>{
        this.setState({click: !this.state.click})
    }

    state = { clicked: false }
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <IconContext.Provider value={{color:'#000'}}>
            <nav className="NavbarItems">
                <div className="navbar">
                    <header className='menu-bars'>
                        <p>
                        <img src={pc} onClick={this.showSidebar}/>
                        Solutions App
                        </p>
                    </header>
                </div> 
            <nav className={this.state.click ? 'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items' onClick={this.showSidebar}>
                    <li className="navbar-toggle">
                    <div>
                        <header className='navbar'>
                        <p>
                            <img src={pc}/>
                            Solutions App
                            <RiIcons.RiBarChartHorizontalLine onClick={this.showSidebar}/>
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
            <Switch>
                <Route path='/trabajadores' component={Trabajadores} />
                <Route path='/ausentismo' component={Ausentismo} />
                <Route path='/accidentalidad' component={Accidentalidad} />
                <Route path='/vacunacion' component={Vacunacion} />
                <Route path='/administrar' component={Administrar} />
            </Switch> 
                <div className="menu-iconsed" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}>  
                    </i>
                </div>
                <ul className={this.state.clicked ? 'nav-men active': 'nav-men'}>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.path}>
                                <span>{item.icon}{item.title}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul> 
            </nav> 
            </IconContext.Provider>
            
        )
    }
}

export default BarraEncabezado