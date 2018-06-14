class GitApiParser {

    constructor() {

    }

    processorForIssueEvent(data) {
        const eventData = {
            type: data.type,
            currentIssueLabel: `${data.payload.action === "opened" ? "Issue Opened" : "Issue Closed"}`,
            currentIcon: `${data.payload.action === "opened" ? "fas fa-exclamation-circle" : "far fa-times-circle"}`,
            actionLink: `${data.payload.issue.html_url}`,
            actionText: `${data.repo.name} // ${data.payload.issue.title}`,
            aditionalText: `Timestamp: ${data.created_at}`
        };
        return eventData;
    }

    processorForPushEvent(data) {
        const eventData = {
            type: data.type,
            currentIssueLabel: "New Commit",
            currentIcon: "fas fa-arrow-up",
            actionLink: `https://github.com/${data.repo.name}/commit/#${data.payload.head}`,
            actionText: `Pushed: ${data.repo.name} => #${data.payload.head.slice(0,5)} :: Branch => ${data.payload.ref}`,
            aditionalText: `Timestamp: ${data.created_at}`
        };
        return eventData;
    }

    processForCreateEvent(data) {

    }

    processForUnknownEvent() {
        const eventData = {
            type: "Unknown",
            currentIssueLabel: "Sp00ky",
            currentIcon: "fab fa-snapchat-ghost",
            actionLink: `#`,
            actionText: `The ghost of the internetz tried to process this request but failed.`,
            aditionalText: `No one ever explaained to muuueee how to process this API request :(`

        };

        return eventData;
    }
    processForType(data) {
        switch (data.type) {
            case ("PushEvent"):
                return this.processorForPushEvent(data);
            case ("IssuesEvent"):
                return this.processorForIssueEvent(data);
            case ("CreateEvent"):
                return this.processForCreateEvent(data);
            default:
                return this.processForUnknownEvent();
        }
    }

    transform(data) {
        //Setup our structure and fallback defaults
        const objectForProcessing = data.data[0];
        const coreObject = {
            userInfo: {
                ...objectForProcessing.actor
            }
        }
        let metaData = this.processForType(objectForProcessing);

        let finalObject = {
            ...coreObject,
            ...metaData
        };

        return finalObject;
    }

    static getDefaults() {
        return {
            type: "None",
            currentIssueLabel: "Loading....",
            currentIcon: "fas fa-question-circle",
            userInfo: {
                display_login: "???"
            }
        };
    }

}

export default GitApiParser;