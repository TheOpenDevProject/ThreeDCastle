import React, { Component } from 'react'
import ReactDOM from "react-dom";

import AnimatedTyper from '../AnimatedTyper.jsx';
import HomeBackground from '../HomeBackground.jsx';
export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="full-width-flex" id="home-container">
                <HomeBackground/>
            </div>
        )
    }
}
