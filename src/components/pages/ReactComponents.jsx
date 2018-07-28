import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../booking_calendar/Calendar.jsx';
export default class ReactComponents extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Calendar styleClass="calendar"/>
            </div>
        )
    }
}
