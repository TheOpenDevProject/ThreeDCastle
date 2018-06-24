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


export class CalendarPageGroup extends Component{
    constructor(props, ...children){
        super(props, children);
    }


    render(){
        return (this.props.children[0]);
    }
}

export class CalendarPage extends Component{
    constructor(props, ...children){
        super(props,children);
    }

    render(){
        return (<div className="__calendar-page-group">{this.props.children}</div>);
    }
}

export class CalendarDayBox extends Component{
    constructor(props, ...children){
        super(props, children);
        this.state = {
           currentStateStyleClass: "active" 

        }
    }

    componentDidMount(){

    }


    render(){
        return(
            <div className={this.props.baseStyleClass + " " + this.state.currentStateStyleClass}>
                <span className="__date-header">1</span>
            </div>
        );
    }
}