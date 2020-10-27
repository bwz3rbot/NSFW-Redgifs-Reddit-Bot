const http = require('http');
const https = require('https');
http.globalAgent.maxSockets = 1;
https.globalAgent.maxSockets = 1;
const axios = require('axios');
const cheerio = require('cheerio');
const redgifs = axios.create({
    baseURL: 'https://www.redgifs.com',
    timeout: 6000
});

async function getGif() {
    console.log("redgifs getting categories...");
    const res = await redgifs.get('/featured/categories');
    let $ = cheerio.load(res.data);


    const links = $('div[class="links-list__item"]');
    const linkslist = [];

    let i;
    links.children('a').each((index, value) => {
        linkslist.push($(value).attr('href'));
        i = index;
    });


    const randomLink = linkslist[Math.floor(Math.random() * i)];


    console.log(`redgifs chose category: "${randomLink}". Getting latest...`);


    const randomPage = await redgifs.get(randomLink + "?latest");


    $ = cheerio.load(randomPage.data);


    const gifs = $('div[class="grid-gfy-item"]');

    const gifsList = [];
    gifs.children('a').each((index, value) => {
        gifsList.push($(value).attr('href'));
        i = index;

    });
    const randomGif = gifsList[Math.floor(Math.random() * i)];

    console.log(`Chose this random gif from www.redgifs.com: "${randomGif}"`);

    const gifPage = await redgifs.get(randomGif);

    $ = cheerio.load(gifPage.data);

    let title = $('title').text();
 

    title = title.substring(0, title.indexOf('| Red'));
    return {
        title: title.trim(),
        url: "https://www.redgifs.com" + randomGif
    }
}

module.exports = {
    getGif
}