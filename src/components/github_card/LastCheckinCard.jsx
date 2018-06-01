import React, { Component } from 'react'
import ReactDOM from "react-dom";
export default class LastCheckinCard extends Component {

    constructor(props) {
        super(props);
        this.octokit = require("@octokit/rest")({
            debug: true
        });

        this.state = {cardData: ""}
    }

    componentDidMount(){
        this.octokit.activity.getEventsForUserPublic({
            username: "TheOpenDevProject"
        }).then((error, result) => {
            console.log(result);
        })
    }

    render() {
        return (
            <div className="small-mdl-card">
                {
                    this.state.cardData
                }
            </div>
        )
    }
}
