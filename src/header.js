import React, { Component } from 'react';
import './App.css';

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
                <h1>{this.state.company}</h1>
                <p>{this.state.subtitle}</p>                
            </div>
        );
    }
}

export default header;
