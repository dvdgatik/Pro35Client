import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <strong>Copyright © 2020 <a target='_blank' href="https://itcom.mx/">ITCOM MX</a>.</strong>
                    Todos los derechos reservados.
                    <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 1.0.0
                         </div>
                    </footer>

        );
    }
}

export default Footer;