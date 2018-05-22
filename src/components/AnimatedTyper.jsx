import React, { Component } from 'react'
import ReactDOM from 'react-dom';

/**
 * Main React Entry Pint
 */
class AnimatedTyper extends React.Component {

    constructor(props) {
        super(props);
        this.state = { fullMessage: props.Message.split(""), internalMsgState: [], idx: 0 }
        console.log(this.state.fullMessage);
        this.msgState = [];
        this.tick = this.tick.bind(this);
    }

    tick() {
        if (this.state.internalMsgState.length !== this.state.fullMessage.length) {
            this.msgState.push(this.state.fullMessage[this.state.idx]);
            this.setState({ internalMsgState: this.msgState });
            this.setState(xState => {
                return { idx: xState.idx + 1 };
            });
            console.log(this.state.idx);
            console.log(this.state.internalMsgState);
        } else {
            //Kill the timer or run some final animations :D
            clearInterval(this.animationTimer);
        }

    }

    componentDidMount() {
        this.animationTimer = setInterval(this.tick, 200);
    }


    render() {
        return (
            <div className="type-containter">
                <div className="animated-typer">{this.state.internalMsgState}</div>
                <span className="blinking-cursor">|</span>
            </div>
        );
    }
}

export default AnimatedTyper;