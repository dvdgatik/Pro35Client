import React, { Component } from 'react';
import Header from './template/Header';
import Sidebar from './template/SidebarEmpleado';
import Footer from './template/Footer';

class Centros extends Component {
    constructor() {
        super();
        this.state = {
            nombre: '',
            telefono: '',
            calle: '',
            colonia: '',
            cp: 0,
            estatus: false,
            centros: [],
            _id: ''
        };
    }
    componentDidMount() {
        this.fetchCentros();
    }
    
    fetchCentros() {
        const localhost = process.env.REACT_APP_LOCAL_HOST;
		fetch(localhost + 'centro/listarA') //por defecto es get
			.then(res => res.json())
			.then(data => {
                console.log(data);
				this.setState({centros:data.centros});
                console.log(this.state.centros[0]);
               // console.log(this.state.centros);

			});
	}
    
    render() {
        return (
            <div>
            <Header/>
            <Sidebar/>
            <div className='content-wrapper'>

                centros
                <table border="solid">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Calle</th>
                            <th>Colonia</th>
                            <th>CP</th>
                            <th>Estatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.centros.map(centro =>  {
                                return(
                                    <tr key={centro._id}>
                                        <td>{centro.nombre}</td>
                                        <td>{centro.telefono}</td>
                                        <td>{centro.calle}</td>
                                        <td>{centro.colonia}</td>
                                        <td>{centro.cp}</td>
                                        <td>{centro.estatus}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Footer/>
            
            </div>
        );
    }
}

export default Centros;