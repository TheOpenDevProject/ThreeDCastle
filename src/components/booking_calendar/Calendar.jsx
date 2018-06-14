import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CalendarTitleBar } from "./Components.jsx";
export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            styleClass: props.styleClass,
        };
    }

    render() {
        return (
            <div className={this.state.styleClass}>
                <CalendarTitleBar Title="Available Bookings" styleClass="calendar-title" />
            </div>
        )
    }
}
