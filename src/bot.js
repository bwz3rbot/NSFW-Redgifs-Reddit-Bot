const dotenv = require('dotenv').config({
    path: 'pw.env'
});
const Snoowrap = require('./config/snoo.config');
const redgif = require('./service/redgif');
const reddit = new Snoowrap().requester;
const INTERVAL = ((60 * 1000) * process.env.INTERVAL);

(async () => {
    await run();
})();


async function run() {
    await postGif();
    console.log(`Processing complete. Sleeping for ${INTERVAL/60/1000} minutes...`);
    setInterval(async () => {
        await run();
    }, INTERVAL);
}

async function postGif() {
    const gif = await redgif.getGif();
    console.log("Reddit posting this gif: ", gif);
    const linkPost = await reddit.getSubreddit(process.env.MASTER_SUB).submitLink({
        title: gif.title,
        url: gif.url
    });

    console.log("Reddit selecting flair template...");
    const ID = linkPost.name.replace('t3_', '');
    console.log("setting flair text to be: ", process.env.FLAIR_TEXT)
    await reddit.getSubmission(ID).selectFlair({
        text: process.env.FLAIR_TEXT,
        flair_template_id: process.env.FLAIR_TEMPLATE_ID
    });
}