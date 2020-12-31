import React, { Component } from 'react';
import Header from './template/Header';
import Sidebar from './template/SidebarEmpleado';
import Footer from './template/Footer';

class Areas extends Component {
    constructor() {
        super();
        this.state = {
            nombre: '',
            descripcion: '',
            estatus: false,
            areas: [],
            _id: ''
        };
    }
    componentDidMount() {
        this.fetchAreas();
    }
    
    fetchAreas() {
        const localhost = process.env.REACT_APP_LOCAL_HOST;
        console.log(localhost);
		fetch(localhost+'area/listarA') //por defecto es get
			.then(res => res.json())
			.then(data => {
                console.log(data);
				this.setState({areas:data.areas});
                console.log(this.state.areas[0]);
                console.log(this.state.areas);

			});
	}
    
    render() {
        return (
            <div>
            <Header/>
            <Sidebar/>
            <div className='content-wrapper'>

                areas
                <table border="solid">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Estatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.areas.map(area =>  {
                                return(
                                    <tr key={area._id}>
                                        <td>{area.nombre}</td>
                                        <td>{area.descripcion}</td>
                                        <td>{area.estatus}</td>
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

export default Areas;