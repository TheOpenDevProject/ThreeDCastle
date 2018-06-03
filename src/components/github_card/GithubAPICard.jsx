import React, { Component } from 'react'
import ReactDOM from "react-dom";
import GitHubApi from "@octokit/rest";
import GitApiParser from "./GitApiParser";
export default class GithubAPICard extends Component {

    constructor(props) {
        super(props);
        this.gitApi = new GitHubApi();
        this.gitTransformer = new GitApiParser();
        this.pollServiceEvent = this.pollServiceEvent.bind(this);
        this.state = { displayData: GitApiParser.getDefaults() };
    }


    pollServiceEvent(resultsPerPage = 1){
        this.gitApi.activity.getEventsForUserPublic({
            username: this.props.forUser,
            per_page: resultsPerPage
        }).then((result, error) => {
            console.log(result);
            const final = this.gitTransformer.transform(result);
            this.setState({ displayData: final });
        })
    }

    componentDidMount() {
        /**
         * Do initial API request and then every N seconds after
         */
        this.pollServiceEvent(this.props.resultsPerPage);
        this.serviceWorker = setInterval(this.pollServiceEvent, this.props.updateInterval,this.props.resultsPerPage)
    }

    render() {
        return (
            <div className="small-mdl-card">
                <section className="lhs-flex">
                    <span className="action-type-icon"><i className={this.state.displayData.currentIcon} /></span>
                    <span className="action-type-label"><label>{this.state.displayData.currentIssueLabel}</label></span>
                </section>
                <section className="rhs-flex">
                    <span className="user">
                        <span className="action-username"><label>{this.state.displayData.userInfo.display_login}</label></span>
                    </span>
                    <span className="action-link"><a href={this.state.displayData.actionLink}>{this.state.displayData.actionText}</a></span>
                    <span className="action-aditional-text">{this.state.displayData.aditionalText}</span>
                    {/*<span className="action-user-icon">
                        <img src={this.state.displayData.userInfo.avatar_url + ".jpg"} />
                    </span>*/}
                </section>

            </div>
        )
    }
}
