import React, { Component } from 'react'
import ReactDOM from "react-dom";

import AnimatedTyper from '../AnimatedTyper.jsx';
import HomeBackground from '../HomeBackground.jsx';
import GithubAPICard from '../github_card/GithubAPICard.jsx';
export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        return ([<div className="card-container">
            <GithubAPICard />
        </div>,
        <AnimatedTyper debugMode={false} Message="Did the universe start with a Hello World?" />,
        <HomeBackground />]);
    }
}
