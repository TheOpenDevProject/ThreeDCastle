class GitApiParser {

    constructor() {

    }

    processorForIssueEvent(data) {
        
    }

    processorForPushEvent(data) {

    }

    processForCreateEvent(data) {

    }

    processForUnknownEvent() {

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
            type: "None",
            currentIssueLabel: "Loading....",
            currentIcon: "fas fa-question-circle",
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

    static getDefaults(){
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