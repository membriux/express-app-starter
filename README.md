# Node/Express JS Starter Project
Steps to deploy your [Parse-Server](https://parseplatform.org/) and DB using Heroku.

## Steps

### 0. Clone this Repo

![Clone](https://i.imgur.com/7GFNXU3.png)

### 1. Install/Update Packages

`npm install`

### 2. Setup/Deploy Parse

Deploy your first Parse server using Heroku:

- [Deploy to Heroku](https://heroku.com/deploy?template=https://github.com/ParsePlatform/parse-server-example)
- [Heroku Guide](https://devcenter.heroku.com/articles/deploying-a-parse-server-to-heroku)

Test it inside terminal:
```
curl -X POST \
-H "X-Parse-Application-Id: APPLICATION_ID" \
-H "Content-Type: application/json" \
-d '{"score":123,"playerName":"Sean Plott","cheatMode":false}' \
http://SERVER_URL
```

### 3. Configure Parse

Go to `parse/db.js` and configure your parse server:

```js
// Parse config
let Parse = require('parse/node')

Parse.initialize("APP_ID", "CLIENT_ID")
Parse.serverURL = "SERVER_URL"

module.exports = Parse
```

[Parse Documentation for more configuration settings](https://docs.parseplatform.org/js/guide/#getting-started)

### 4. Test Connection

On your `app.js`, import your parse configuration:

```js
var Parse = require('parse/db.js')
```

Run your app using the terminal:

`npm start`

If the app runs normally, then you're good to go! Otherwise, check the terminal for any issues it encountered.
