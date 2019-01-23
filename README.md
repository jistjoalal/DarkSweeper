# Darksweeper
minesweeper with a dark theme and other cool features!

Play Darksweeper:

[![demo](https://i.gyazo.com/5f357692c2dae9806ea7e882a867847c.png)
](http://darksweeper.com)

- original simultaneous click to clear, guaranteed safe start
- any size grid
- RNG mines
- x-ray vision for when you don't want to guess or just want to cheat
- [3BV](http://www.minesweeper.info/wiki/3BV) Scoring
- Top 10 Leaderboard

## Why?
I like minesweeper but I also like my eyes. And because I hate guessing and
wanted the power to xray the board. And to learn how to use React!

# Download
```
git clone git@github.com:jistjoalal/DarkSweeper.git
```
## Development server
```sh
cd DarkSweeper/client
npm install
npm start
```

## Optimized build
```sh
cd Darksweeper/client
npm install
npm run build
npm i -g serve
serve -s build
```

## Back-end
```sh
cd Darksweeper
npm install
npm start
```
This is an express server that connects to a MongoDB instance in the cloud,
serves the create-react-app build directory, and connects the two using GraphQL
and Apollo.

## Deploy Script
```sh
./scripts/deploy.sh "commit msg"
```
Server hosted on AWS Elastic Beanstalk. The DB is hosted on [mLab](https://mlab.com/).
Connect with environment variable on AWS:
```
// only needs to run once ever per AWS environment!
eb setenv DS_DB_URL=mongodb://<dbuser>:<dbpass>@url:port/database
```

### Deploy from new machine
AWS EB uses some background files to make deploying this simple. I use a private
repo to sync these files to be able to deploy from multiple machines.

[More info](https://stackoverflow.com/questions/28821632/how-to-configure-eb-cli-with-eb-env-that-is-already-running)

