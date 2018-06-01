import React, { Component } from 'react'
import ReactDOM from "react-dom";
import GitHubApi from "@octokit/rest";
export default class LastCheckinCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayData: {
                currentIssueLabel: "Loading...",
                currentIcon: "fas fa-question-circle"
            }
        }

        //We use this to determine how to parse our return data.
        this._typeMap = {
            mapedCallbacks: [
                {
                    type: "IssuesType", callback: (data) => {
                        let renderData = {
                            currentIssueLabel: this.mapIssueActionString(data.payload.action),
                            currentIcon: this.getTypeIcon(data.type)
                        };
                    }
                },
                {
                    type: "Other", callback: (data) => {

                    }
                }
            ]
        };

        this.processApiData = this.processApiData.bind(this);
    }

    processApiData(data) {
        //ES6 find the correct callback mapping
        const processorToUse = this._typeMap.mapedCallbacks.find(o => { return o.type === data.type });
        const cardInfo = processorToUse.callback(data);
        this.setState({ displayData: cardInfo });
    }

    mapIssueActionString(apiString) {
        switch (apiString) {
            case ("closed"):
                return "Issue Closed";
                break;
            case ("opened"):
                return "Issue Opened";
                break;
        }
    }

    getTypeIcon(issueType) {
        switch (issueType) {
            case (""):
                break;
        }
    }

    componentDidMount() {
        const gitApi = new GitHubApi();

        gitApi.activity.getEventsForUserPublic({
            username: "TheOpenDevProject",
            per_page: 100
        }).then((result, error) => {
            console.log(result);
            this.processApiData(result.data[0]);
        })
    }

    render() {
        return (
            <div className="small-mdl-card">
                <span className="action-type-label"><label>{this.state.displayData.currentIssueLabel}</label></span>
                <span className="action-type-icon"><i className={this.state.displayData.currentIcon} /></span>
            </div>
        )
    }
}
