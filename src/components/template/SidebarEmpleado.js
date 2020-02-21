import React, { Component } from 'react';
import $ from 'jquery';

class Sidebar extends Component {
  componentDidMount() {
    $(document).ready(function() {
     $(".t-link").click(function(event){
         event.preventDefault();
         $(this).siblings("ul.nav-treeview").slideToggle();
         $(this).parent().toggleClass('menu-open');
       });
      
    $('#sidebar-overlay').click(function() {
       $('.sidebar-mini').toggleClass('sidebar-open');
       $('.sidebar-mini').addClass('sidebar-collapse');
    });

   
    });
     
 }

    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img width="60px" src="http://localhost:3001/dist/img/logo-blanco-left.png" alt="AdminLTE Logo" className="" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light"> 
          <img width="130px" src="http://localhost:3001/dist/img/logo-blanco-right.png"/>
    </span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    {/*<div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="http://localhost:3001/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
      </div>
      <div className="info">
        <a href="fake_url" className="d-block">Alexander Pierce</a>
      </div>
        </div>*/}
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
                   with font-awesome or any other icon font library */}
        
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link t-link">
            <i className="nav-icon fas fa-building" />
            <p>
              Empresas
              <i className="fas fa-angle-left right" />
              <span className="badge badge-info right">6</span>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/empresas" className="nav-link">
                <i className="fas fa-plus-circle nav-icon cgreen" />
                <p>Añadir Empresa</p>
              </a>
            </li>
            {/*<li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Empresa</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/boxed.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Empresa</p>
              </a>
                  </li>*/}
            <li className="nav-item">
              <a href="/empresas" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Empresa</p>
              </a>
                  </li>
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a href="fake_url" className="nav-link t-link">
            <i className="nav-icon fas fa-door-open"/>
            <p>
              Centros de Trabajo
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/centros" className="nav-link">
              <i className="fas fa-plus-circle nav-icon cgreen" />
                <p>Añadir Centro de Trabajo</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/centros" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Centros de trabajo</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a href="fake_url" className="nav-link t-link">
            <i className="nav-icon fas fa-archive" />
            <p>
              Áreas de Trabajo
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/areas" className="nav-link">
              <i className="fas fa-plus-circle nav-icon cgreen" />
                <p>Añadir Área de trabajo</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/areas" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Áreas de Trabajo</p>
              </a>
            </li>            
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a href="fake_url" className="nav-link t-link">
            <i className="nav-icon fas fa-layer-group"/>
            <p>
              Departamentos
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/departamentos" className="nav-link">
              <i className="fas fa-plus-circle nav-icon cgreen" />
                <p>Añadir Departamento</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/departamentos" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Departamentos</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a href="fake_url" className="nav-link t-link">
            <i className="nav-icon fas fa-users" />
            <p>
              Empleados
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/tables/simple.html" className="nav-link">
              <i className="fas fa-plus-circle nav-icon cgreen" />
                <p>Añadir Empleado</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/empleados" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Empleados</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-header">ANALISIS</li>
        <li className="nav-item">
          <a href="pages/calendar.html" className="nav-link">
            <i className="nav-icon fas fa-chart-pie" />
            <p>
              Reportes
              <span className="badge badge-info right">2</span>
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="pages/gallery.html" className="nav-link">
            <i className="nav-icon far fa-calendar-alt"/>
            <p>
              Periodos de Eva.
            </p>
          </a>
        </li>
        <li className="nav-item has-treeview">
          <a href="fake_url" className="nav-link t-link">
            <i className="nav-icon fas fa-clipboard-list" />
            <p>
              Encuestas
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/encuestas/1" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Guia I</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/encuestas/2" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Guia II</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/encuestas/3" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Guia III</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-header">SOPORTE</li>
        <li className="nav-item">
          <a href="https://adminlte.io/docs/3.0" className="nav-link">
            <i className="nav-icon fas fa-file" />
            <p>Documentación</p>
          </a>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
        );
    }
}

export default Sidebar;