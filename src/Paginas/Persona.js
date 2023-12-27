import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import {IconContext} from 'react-icons'


class Persona extends React.Component{
    state={
        abierto:false,
    }

    abrirModalNombre=()=>{
        this.setState({abierto: !this.state.abierto});
    }

    state={
        abiertoCa:false,
    }

    abrirModalCargo=()=>{
        this.setState({abiertoCa: !this.state.abiertoCa});
    }

    state={
        abiertoCr:false,
    }

    abrirModalCronograma=()=>{
        this.setState({abiertoCr: !this.state.abiertoCr});
    }

    state={
        abiertoMa:false,
    }

    abrirModalMateriales=()=>{
        this.setState({abiertoMa: !this.state.abiertoMa});
    }

    state={
        abiertoPr:false,
    }

    abrirModalProyectos=()=>{
        this.setState({abiertoPr: !this.state.abiertoPr});
    }

    state={
        abiertoDo:false,
    }

    abrirModalDocumentos=()=>{
        this.setState({abiertoDo: !this.state.abiertoDo});
    }

    render(){
        return(
            <IconContext.Provider value={{color:'#000'}}>
                <div className='persona'>
                <div>
                    <Container>
                        <br />
                        <div>
                            Nombres ide
                            <Link to="#" className='menu-ba'>
                            <Button color="primary" onClick={this.abrirModalNombre}>Editar</Button>                  
                            </Link>
                        </div>
                    </Container>
                    <Container>
                        <br />
                        <div>
                            Cargo actual
                            <Link to="#" className='menu-ba'>
                                <Button color="primary" onClick={this.abrirModalCargo}>Editar</Button>                    
                            </Link>
                        </div>
                    </Container>
                    <Container>
                        <br />
                        <div>
                            Cronograma
                            <Link to="#" className='menu-ba'>
                                <Button color="primary" onClick={this.abrirModalCronograma}>Editar</Button>                    
                            </Link>
                        </div>
                    </Container>
                    <Container>
                        <br />
                        <div>
                            Materiales id
                            <Link to="#" className='menu-ba'>
                                <Button color="primary" onClick={this.abrirModalMateriales}>Editar</Button>                    
                            </Link>
                        </div>
                    </Container>
                    <Container>
                        <br />
                        <div> 
                            Proyectos id.
                            <Link to="#" className='menu-ba'>
                                <Button color="primary" onClick={this.abrirModalProyectos}>Editar</Button>                    
                            </Link>
                        </div>
                    </Container>
                    <Container>
                        <br />
                        <div>
                            Documentos
                            <Link to="#" className='menu-ba'>
                                <Button color="primary" onClick={this.abrirModalDocumentos}>Editar</Button>                    
                            </Link>
                        </div>
                    </Container>
                    </div>
                </div> 

                <Modal isOpen={this.state.abierto}>
                    <ModalHeader>
                        Editar nombre usuario
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label fro="Nombre">Nombre</Label>
                            <Input type="text" id="Nombre"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.abrirModalNombre}>Guardar</Button>
                        <Button color="secundary" onClick={this.abrirModalNombre}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.abiertoCa}>
                    <ModalHeader>
                        Editar cargo usuario
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label fro="Cargo">Cargo</Label>
                            <Input type="text" id="Cargo"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.abrirModalCargo}>Guardar</Button>
                        <Button color="secundary" onClick={this.abrirModalCargo}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.abiertoCr}>
                    <ModalHeader>
                        Editar cronograma usuario
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label fro="Cronograma">Cronograma</Label>
                            <Input type="text" id="Cronograma"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.abrirModalCronograma}>Guardar</Button>
                        <Button color="secundary" onClick={this.abrirModalCronograma}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.abiertoMa}>
                    <ModalHeader>
                        Editar materiales usuario
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label fro="Materiales">Materiales</Label>
                            <Input type="text" id="Materiales"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.abrirModalMateriales}>Guardar</Button>
                        <Button color="secundary" onClick={this.abrirModalMateriales}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.abiertoPr}>
                    <ModalHeader>
                        Editar proyectos usuario
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label fro="Proyectos">Proyectos</Label>
                            <Input type="text" id="proyectos"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.abrirModalProyectos}>Guardar</Button>
                        <Button color="secundary" onClick={this.abrirModalProyectos}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.abiertoDo}>
                    <ModalHeader>
                        Editar documentos usuario
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label fro="Documentos">Documentos</Label>
                            <Input type="text" id="documentos"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.abrirModalDocumentos}>Guardar</Button>
                        <Button color="secundary" onClick={this.abrirModalDocumentos}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </IconContext.Provider>
        )
        
    }

}

export default Persona