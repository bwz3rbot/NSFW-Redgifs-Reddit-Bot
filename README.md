# Redgifs => Reddit Post

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
    - [Prerequisites](#pres)
        - [Setting Up Your Script App](#script_app)
        - [Creating Post Flairs](#post_flairs)
        - [Environment Variables](#env_var)
- [Usage](#usage)
    - [Installing](#install)
    - [Running](#run)

# About <a name = "about"></a>

# !!WARNING!! This bot is NSFW!

This bot will scrape gifs from __https://www.redgifs.com/__ and post them to your subreddit at an interval, until turned off.


# Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

## Prerequisites <a name = "pres"></a>


The first step is to install the correct version of NodeJS for your system. You can find the official downloads here: https://nodejs.org/en/download/


## Setting Up Your Script App <a name = "script_app"></a>

You'll have to create a new account for your bot before you move any further.\
Once the account is created, log in, go to [reddit.com/prefs/apps](https://www.reddit.com/prefs/apps) to fill out the form to create a new script app.



<img src='https://i.imgur.com/yq8akJ7.png'>

## Creating Post Flairs <a name = "post_flairs"></a>

The bot will select a flair template id that you choose to make its posts stand out from other users. The steps to set this up are fairly straightforward:
First go to your Mod Dashboard by navigating to https://www.reddit.com/r/YOUR_SUB_NAME/about/modqueue
1. Click `ADD FLAIR`
<img src ="https://imgur.com/gcr6Vna.png">

2. Fill out the form:
    - The default text will be overwritten by the bot, but is required for you to enter before submitting
    - CSS class can be left blank
    - You may decide to make this a *Mod Only* flair, but you will need to add the bot as a mod to your server for it to work
    - Edit the background color and text color the way you like
    - You may choose to edit the post appearance.
    - Upload images, change the color of the post. Play around until you find something you like.
    - When you are finished editing the appearance, click `SAVE`
<img src ="https://imgur.com/EIaWseg.png">

3. Now `COPY ID` and you are going to paste this into your pw.env file, which is explained in the next step.
<img src="https://imgur.com/Ub3otHW.png">

## Environment Variables <a name = "env_var"></a>
Now that you've set up your bot account, granted it permissions (if nececary) on your subreddit, created a script app and gotten your flair id, it's time to download the source code and paste in your environment variables.

Download the .zip file containing the source code on this page. Unzip it and save it to your computer somewhere. Now open up the pw.envEXAMPLE file.\
Also have open reddit.com/prefs/apps as you'll need to copy/paste the items you'll find there.\
__USER_AGENT__ is just a name that the server will identify your bot by. It can be whatever you want.\
__CLIENT_ID__ and __CLIENT_SECRET__ are fround in prefs/apps.\
__REDDIT_USER__ is your bots username.\
__REDDIT_PASS__ is its password.\
__MASTER_SUB__ is the subreddit it will work on.\
__DEBUG_NETWORK__ should be set to false unless any problems arise.\
__INTERVAL__ how often (in minutes) the bot will submit a new post.\
__FLAIR_TEMPLATE_ID__ is obtained when you created your flair template in the __Mod Dashboard__.
__FLAIR_TEXT__ the text that will be set in the post flair.




USER_AGENT='FROM PREFS/APPS'\
CLIENT_ID='FROM PREFS/APPS'\
CLIENT_SECRET='FROM PREFS/APPS'\
REDDIT_USER='BOTS USERNAME'\
REDDIT_PASS='BOTS PASSWORD'\
MASTER_SUB='YOUR SUBREDDIT'\
DEBUG_NETWORK='false'\
INTERVAL='10'\
FLAIR_TEMPLATE_ID='SHOULD LOOK LIKE THIS: ecfe4d36-1831-11eb-9371-0ed75c0ba1df'\
FLAIR_TEXT='REDGIFS'



Once these fields are completely filled out, remove <i>EXAMPLE</i> from the end of the filename.

> pw.envEXAMPLE = pw.env


# Usage <a name = "usage"></a>

## Installing <a name="install"></a>

Once you've got your pw.env file correctly filled out and renamed, you may run the installer. 

Double-click __INSTALL.bat__ to run the isntaller script. Linux and Mac users may use the command `npm install` to install.

Once the installer is finished running, you may use __RUN.bat__ to run. Linux and Mac users may use the command `node src/bot.js` to run.

## Running <a name="run"></a>

To run the bot, double-click __RUN.bat__

The bot will: 
1. Scrape redgifs.com/featured/categories for a list of categories to choose from.
2. It will pick a category at random and then navigate to the category's new section.
3. It will select a random gif from the page and then return with a title and url.
4. Reddit will take that title and url and post them to your subreddit. If you have defined a custom post flair, they will be assigned the flair you set in pw.env.
5. The bot will sleep for a number of minutes as defined in the pw.env file, then continuously run until shut off.