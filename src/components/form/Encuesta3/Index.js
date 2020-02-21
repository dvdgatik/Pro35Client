import React, { Component } from 'react';
import Header from '../../template/Header';
import SidebarEmpleado from '../../template/SidebarEmpleado';

import Stepper from './Stepper';class Index extends Component {
    render() {
        return (
            <div>
            <Header></Header>
            <div className="content-wrapper">
            <Stepper></Stepper>
            </div>
            <SidebarEmpleado></SidebarEmpleado>
        </div>
        );
    }
}

export default Index;