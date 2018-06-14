import React, { Component } from 'react'

export class CalendarTitleBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.Title,
            styleClass: props.styleClass,
        };
    }
    render() {
        return (
            <div className={this.state.styleClass}>
                <span className="__flex--container">
                    <div className="__flex--segment start"><button>Previous</button></div>
                    <div className="__flex--segment center">
                        <h1>{this.state.title}</h1>
                    </div>
                    <div className="__flex--segment end"><button>Next</button></div>
                </span>
            </div>
        )
    }
}
