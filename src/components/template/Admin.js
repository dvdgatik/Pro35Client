import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './SidebarEmpleado';
import Footer from './Footer'
class Admin extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidebar/>
                <Footer/>      
            </div>
        );
    }
}

export default Admin;