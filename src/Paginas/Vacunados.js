import React from 'react'
import {Table, Button, Container} from 'reactstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';

const data = [
    {id:1, nombre: "Juan Jose Betancourt Lozano", vacunado: "Si"},
    {id:2, nombre: "Nicolai Martín Pérez", vacunado: "Si"},
    {id:3, nombre: "Yuli Nova", vacunado: "Si"},
    {id:4, nombre: "Carlos Mario Zamora Diaz", vacunado: "Si"},
    {id:5, nombre: "Jorge Sebastian Capera", vacunado: "Si"},
    {id:6, nombre: "Brayan Sneider Vargas", vacunado: "Si"}
];

class Vacunados extends React.Component{

    state={
        data:data,
        form:{
            id: '',
            nombre: '',
            vacunado: ''
        },
        modalInsertar: false,
        modalEditar: false,
    }

    handleChange=e=>{
        this.setState({
            form:
            {
            ...this.state.form, 
            [e.target.name]: e.target.value,
            }
        });
    }
    mostrarModalInsertar=()=>{
        this.setState({modalInsertar: true});
    }

    ocultarModalInsertar=()=>{
        this.setState({modalInsertar: false});
    }

    mostrarModalEditar=(registro)=>{
        this.setState({modalEditar: true, form: registro});
    }

    ocultarModalEditar=()=>{
        this.setState({modalEditar: false});
    }

    insertar=()=>{
        var valorNuevo={...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista=this.state.data;
        lista.push(valorNuevo);
        console.log(valorNuevo)
        this.setState({data: lista, modalInsertar: false});
    }

    editar=(dato)=>{
        var contador=0;
        var lista=this.state.data;
        lista.map((registro)=>{
            if(dato.id===registro.id){
                lista[contador].nombre=dato.nombre;
                lista[contador].vacunado=dato.vacunado;
            }
            contador++;
        });
        this.setState({data: lista, modalEditar: false})

    }

    eliminar=(dato)=>{
        var opcion =window.confirm("Realmente desea eliminar el registro "+dato.id);
        if(opcion){
            var contador=0;
            var lista = this.state.data;
            lista.map((registro)=>{
                if(registro.id===dato.id){
                    lista.splice(contador, 1)
                }
                contador++;
            });
            this.setState({data: lista});
        }
    }

    render(){
        return (
            <div className='vacunados'>
            <Container>
                <br />
                <Button color= "primary" onClick={this.mostrarModalInsertar}>Crear nuevo empleado vacunado</Button>
                <br /><br />
                <Table>
                    <thead><tr><th>Id</th>
                    <th>Nombre</th>
                    <th>Vacunado</th>
                    <th>Acciones</th></tr>
                    </thead>
                    <thead>
                        {this.state.data.map((elemento)=>(
                            <tr>
                             <td>{elemento.id}</td>
                             <td>{elemento.nombre}</td>
                             <td>{elemento.vacunado}</td>
                             <td>{<Button color="primary" onClick={()=> this.mostrarModalEditar(elemento)}>Editar</Button>}</td>
                             <td>{<Button color="danger" onClick={()=> this.eliminar(elemento)}>Eliminar</Button>}</td>
                            </tr>
                        ))}
                    </thead>
                </Table>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        Crear nuevo empleado vacunado
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label fro="Id">Id</Label>
                            <Input type="text" readOnly value={this.state.data.length+1}/>
                        </FormGroup>
                        <FormGroup>
                            <Label fro="Nombre">Nombre</Label>
                            <Input type="text" name="nombre" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label fro="Cargo">Vacunado</Label>
                            <Input type="text" name="cargo" onChange={this.handleChange}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>this.insertar()}>Guardar</Button>
                        <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>
                        Editar empleado vacunado
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label fro="Id">Id</Label>
                            <Input type="text" readOnly value={this.state.form.id}/>
                        </FormGroup>
                        <FormGroup>
                            <Label fro="Nombre">Nombre</Label>
                            <Input type="text" onChange={this.handleChange} value={this.state.form.nombre}/>
                        </FormGroup>
                        <FormGroup>
                            <Label fro="Cargo">Vacunado</Label>
                            <Input type="text" onChange={this.handleChange} value={this.state.form.vacunado}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>this.editar(this.state.form)}>Guardar</Button>
                        <Button color="danger" onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </Container>
            </div>
        )
    }
}

export default Vacunados