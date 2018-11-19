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

## Deploy Sequence
```sh
npm run build
git add -A
git commit -m "deploy changes"
eb deploy
```
Server hosted on AWS Elastic Beanstalk. The DB is hosted on [mLab](https://mlab.com/).
Connect with environment variable on AWS:
```
eb setenv DS_DB_URL=mongodb://<dbuser>:<dbpass>@url:port/database
```