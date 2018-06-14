import React, { Component } from 'react'

export default class StaticMenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {navLinks: props.navLinks, activeLink: window.location.hash};


    }
    render() {
        const listItems = this.state.navLinks.map((item) => {
           return <li key={item.hashref} onClick={() => {
               window.location.hash = item.hashref;
           }}>{item.text}</li>
        });

        
        return (
            <nav className="static-nav">
                <ul>
                    {listItems}
                </ul>
            </nav>
        )
    }
}
