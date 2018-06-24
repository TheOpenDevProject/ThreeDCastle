import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CalendarTitleBar, CalendarPageGroup, CalendarPage, CalendarDayBox } from "./Components.jsx";
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
                <CalendarTitleBar Title="Available Bookings" styleClass="calendar-title" backBttnLabel="Previous" forwardBttnLabel="Next" />
                <CalendarPageGroup ActivePage={this.state.activePage}>
                    <CalendarPage PageNumber={1}>
                    <div className="__row">
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                    </div>
                    <div className="__row">
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                    </div>
                    <div className="__row">
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                    </div>
                    <div className="__row">
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                    </div>
                    <div className="__row">
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                    </div>
                    <div className="__row">
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                        <CalendarDayBox baseStyleClass="calendar--day-box"/>
                    </div>
                    </CalendarPage>
                    <CalendarPage PageNumber={2}>Page 2</CalendarPage>
                </CalendarPageGroup>
            </div>
        )
    }
}
