import React, { Component } from 'react';
import '../Style/App.scss';
import Menu from './Menu';

class header extends Component {
    constructor() {
    super();

    this.state = {
        company: 'Flix',
        subtitle: 'Salfod Manchester, UK'
    }
    }
    render() {
        return (
            <div className="header">
                <Menu/>
                <h1 className="display-4">{this.state.company.toUpperCase()}</h1>
                <p>{this.state.subtitle}</p>                
            </div>
        );
    }
}

export default header;
