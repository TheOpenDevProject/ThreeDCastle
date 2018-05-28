import React, { Component } from 'react'
import ReactDOM from 'react-dom';

/**
 * Main React Entry Pint
 */
class AnimatedTyper extends React.Component {

    constructor(props) {
        super(props);
        this.state = { fullMessage: props.Message.split(""), internalMsgState: [], idx: 0, debugMode: this.props.debugMode };

        /**
        * Log out some debug info if the component is set in debug mode
        */
        if (this.state.debugMode === true) {
            console.log(this.state.fullMessage);
        }

        this.msgState = [];
        this.tick = this.tick.bind(this);
    }

    /**
     * @description Update the internal state of the component.
     */
    tick() {
        if (this.state.internalMsgState.length !== this.state.fullMessage.length) {
            this.msgState.push(this.state.fullMessage[this.state.idx]);
            this.setState({ internalMsgState: this.msgState });
            this.setState(xState => {
                return { idx: xState.idx + 1 };
            });

            /**
             * Log out some debug info if the component is set in debug mode
             */
            if (this.state.debugMode === true) {
                console.log(this.state.idx);
                console.log(this.state.internalMsgState);
            }

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