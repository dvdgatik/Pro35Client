import React, { Component } from 'react';
import {Avatar, Button, CssBaseline,TextField, FormControlLabel, MenuItem, Checkbox, InputLabel, Grid, Box, Typography, Container} from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-router-dom';

class ContentHome extends Component {
    render() {
        return (
            <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Bienvenido</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Inicio</a></li>
            <li className="breadcrumb-item active">Encuestas</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>Encuesta I</h3>
              <p>Guía de Referencia I</p>
            </div>
            <div className="icon">
              <i className="ion ion-android-clipboard" />
            </div>
            <a href="/encuestas/1" className="small-box-footer"><b>Responder</b> <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {/* small box */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3>Encuesta II</h3>
                <p> <strong>Guía de Referencia II</strong> </p>
            </div>
            <div className="icon">
              <i className="ion ion-android-clipboard" />
            </div>
            <a href="/encuestas/2" className="small-box-footer"><b>Responder</b> <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {/* small box */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>Encuesta III</h3>
              <p>Guía de Referencia III</p>
            </div>
            <div className="icon">
              <i className="ion ion-android-clipboard" />
            </div>
            <a href="/encuestas/3" className="small-box-footer"><b>Responder</b> <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        {/*<div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>
              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="#" className="small-box-footer">Responder <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>*/}
        {/* ./col */}
      </div>
      {/* /.row */}
     
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>

        );
    }
}

export default ContentHome;