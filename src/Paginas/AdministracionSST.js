import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import * as GrIcons from "react-icons/gr";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import {IconContext} from 'react-icons'

function AdministracionSST(){
    return(
        <IconContext.Provider value={{color:'#000'}}>
       <div className='administracionSST'>
       <div>
            <Container>
                <br />
                <div>   
                    <Link to="#" className='menu-bars-trabajadores'>
                        <GrIcons.GrUserManager/>                    
                    </Link>
                    Trabajadores
                </div>
            </Container>
            <Container>
                    <Link to="/operario" className='menu-ba'>
                        <Button color="primary">Entrar</Button>                    
                    </Link>
            </Container>

            <Container>
                <br />
                <div>   
                    <Link to="#" className='menu-bars-ausentismo'>
                        <GrIcons.GrUserWorker/>                    
                    </Link>
                    Ausentismo
                </div>
            </Container>
            <Container>
                    <Link to="/ausentes" className='menu-ba'>
                        <Button color="primary">Entrar</Button>                    
                    </Link>
            </Container>

            <Container>
                <br />
                <div>   
                    <Link to="#" className='menu-bars-accidentalidad'>
                        <AiIcons.AiOutlineWarning/>                  
                    </Link>
                    Accidentalidad
                </div>
            </Container>
            <Container>
                    <Link to="/accidentados" className='menu-ba'>
                        <Button color="primary">Entrar</Button>                    
                    </Link>
            </Container>

            <Container>
                <br />
                <div>   
                    <Link to="#" className='menu-bars-enfermedad'>
                        <FaIcons.FaNotesMedical/>                
                    </Link>
                    Enfermedad laboral
                </div>
            </Container>
            <Container>
                    <Link to="/enfermos" className='menu-ba'>
                        <Button color="primary">Entrar</Button>                    
                    </Link>
            </Container>

            <Container>
                <br />
                <div>   
                    <Link to="#" className='menu-bars-vacunacion'>
                        <GiIcons.GiSyringe/>                
                    </Link>
                    Vacunación
                </div>
            </Container>
            <Container>
                    <Link to="/vacunados" className='menu-ba'>
                        <Button color="primary">Entrar</Button>                    
                    </Link>
            </Container>

            <Container>
                <br />
                <div>   
                    <Link to="#" className='menu-bars-sedes'>
                        <BsIcons.BsBuilding/>        
                    </Link>
                    Adminsitrar sedes
                </div>
            </Container>
            <Container>
                    <Link to="/sedes" className='menu-ba'>
                        <Button color="primary">Entrar</Button>                    
                    </Link>
            </Container>
            </div>
       </div> 
       </IconContext.Provider>
    )
}
export default AdministracionSST