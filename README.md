# twitter


# sails
Update config/local file in sails directory

```NODE_ENV=development
port: 4000,
twitterConsumerKey: "consumer-key",
twitterConsumerSecret: "consumer-secret",
twitterAccessTokenKey: "token-key",
twitterAccessTokenSecret: "token-secret"
```

Start sails app at port 4000 with `sails lift`


# node
Add .env file in node directory

```NODE_ENV=development
PORT=4000
TWITTER_CONSUMER_KEY="consumer-key"
TWITTER_CONSUMER_SECRET="consumer-secret"
TWITTER_ACCESS_TOKEN_KEY="token-key"
TWITTER_ACCESS_TOKEN_SECRET="token-secret"
```

Start node app at port 4000 with `npm start`


# react
Start react app using `npm start`

