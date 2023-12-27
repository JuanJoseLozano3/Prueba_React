import React from 'react'
import {Table, Button, Container} from 'reactstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';

const data = [
    {id:1, nombre: "Pepito Perez", razon: "Calamidad Domestica"},
    {id:2, nombre: "Marcela Castro", razon: "Nacimiento Hijo"},
    {id:3, nombre: "Javie Saldaña", razon: "Vacaciones"},
];

class Ausentes extends React.Component{

    state={
        data:data,
        form:{
            id: '',
            nombre: '',
            razon: ''
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
                lista[contador].razon=dato.razon;
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
            <div className='ausentes'>
            <Container>
                <br />
                <Button color= "primary" onClick={this.mostrarModalInsertar}>Crear nuevo ausente</Button>
                <br /><br />
                <Table>
                    <thead><tr><th>Id</th>
                    <th>Nombre</th>
                    <th>Razon</th>
                    <th>Acciones</th></tr>
                    </thead>
                    <thead>
                        {this.state.data.map((elemento)=>(
                            <tr>
                             <td>{elemento.id}</td>
                             <td>{elemento.nombre}</td>
                             <td>{elemento.razon}</td>
                             <td>{<Button color="primary" onClick={()=> this.mostrarModalEditar(elemento)}>Editar</Button>}</td>
                             <td>{<Button color="danger" onClick={()=> this.eliminar(elemento)}>Eliminar</Button>}</td>
                            </tr>
                        ))}
                    </thead>
                </Table>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        Crear nuevo empleado ausente
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
                            <Label fro="Cargo">Razon</Label>
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
                        Editar empleado ausente
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
                            <Label fro="Cargo">Razon</Label>
                            <Input type="text" onChange={this.handleChange} value={this.state.form.ausente}/>
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

export default Ausentes