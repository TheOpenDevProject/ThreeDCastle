import React, { Component } from 'react'

export default class StaticMenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {navLinks: props.navLinks};

    }
    render() {
        const listItems = this.state.navLinks.map((item) => {
           return <li onClick={() => {
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
