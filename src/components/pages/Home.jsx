import React, { Component } from 'react'
import ReactDOM from "react-dom";

import AnimatedTyper from '../AnimatedTyper.jsx';
import HomeBackground from '../HomeBackground.jsx';
import LastCheckinCard from '../github_card/LastCheckinCard.jsx';
export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        return ([
            <LastCheckinCard/>,
            <AnimatedTyper debugMode={true} Message="Did the universe start with a Hello World?" />,
            <HomeBackground />]);
    }
}
