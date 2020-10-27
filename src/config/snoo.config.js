/*
    [Snoowrap Config]
    
    */
const Snoowrap = require('snoowrap');
/* 
    [Client]

    */
const client = {
    userAgent: process.env.USER_AGENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
}
/*
    [Request Config]

    */
const config = {
    requestDelay: 5000,
    warnings: true,
    continueAfterRatelimitError: false,
    retryErrorCodes: [502, 503, 504, 522],
    debug: JSON.parse(process.env.DEBUG_NETWORK) || false
}
/* 
    [SnooConfig]
        - Export Configured Snoowrap 
    */
module.exports = class SnooConfig {
    constructor() {
        this.requester = new Snoowrap(client);
        this.requester.config(config);
    }
    getRequester() {
        return this.requester;
    }
}