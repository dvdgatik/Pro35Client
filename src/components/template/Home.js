import React, {Component, useState} from 'react';
import {Avatar, Button, CssBaseline,TextField, FormControlLabel, MenuItem, Checkbox, InputLabel, Grid, Box, Typography, Container} from '@material-ui/core'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import '../../assets/css/Style.css';
import DescriptionIcon from '@material-ui/icons/Description';
import Header from './Header'
import Sidebar from './SidebarEmpleado'
import ContentHome from './ContentHome'
import { useAuth0 } from "../../react-auth0-spa";



import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import RadioGroup from '@material-ui/core/RadioGroup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Footer from './Footer';
import $ from 'jquery';


class Home extends Component {


    
    render() {
        return(
            <div>
            <Header/>
            <Sidebar/>
            <ContentHome/>
            <Footer/>          
          </div>
        );
    }
}

export default Home;