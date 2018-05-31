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
        return ([
            <AnimatedTyper debugMode={true} Message="Did the universe start with a Hello World?" />,
            <HomeBackground />]);
    }
}
