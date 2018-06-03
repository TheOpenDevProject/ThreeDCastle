import React, { Component } from 'react'
import ReactDOM from "react-dom";
import GitHubApi from "@octokit/rest";
import GitApiParser from "./GitApiParser";
export default class GithubAPICard extends Component {

    constructor(props) {
        super(props);
        this.state = { displayData: GitApiParser.getDefaults() };
    }

    componentDidMount() {
        const gitApi = new GitHubApi();
        const gitTransformer = new GitApiParser();

        gitApi.activity.getEventsForUserPublic({
            username: "TheOpenDevProject",
            per_page: 100
        }).then((result, error) => {
            console.log(result);
            const final = gitTransformer.transform(result);
            this.setState({ displayData: final });
        })
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
                    {/*<span className="action-user-icon">
                        <img src={this.state.displayData.userInfo.avatar_url + ".jpg"} />
                    </span>*/}
                </section>

            </div>
        )
    }
}
