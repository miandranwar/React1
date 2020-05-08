import React, { Component } from 'react';
import './App.scss';

class Menu extends Component {
    constructor() {
        super();

        this.state = {
            navigation: ['Home', 'News', 'Shopping', 'Returns', 'Contact us']
        }
    }
    render() {
        return (
            <div className="menu">
                {this.state.navigation.map((value, index) => {
                    return  <a href="/">{value}</a>
                })
                }
            </div>
        );
    }
}

export default Menu;
