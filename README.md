# Darksweeper

Minesweeper with a dark theme and other cool features!

- original simultaneous click to clear, guaranteed safe start
- any size grid
- RNG mines
- x-ray vision for when you don't want to guess or just want to cheat
- [3BV](http://www.minesweeper.info/wiki/3BV) Scoring
- Top 10 Leaderboard

## Play Darksweeper:

[![Screenshot](https://jist-screenshotter.herokuapp.com/desktop/https://darksweeper.com/)](https://darksweeper.com)

## Why?

I like minesweeper but I also like my eyes. And because I hate guessing and
wanted the power to xray the board. And to learn how to use React!

# Download

```
git clone git@github.com:jistjoalal/DarkSweeper.git
```

## Development server (port 3000)

```sh
cd DarkSweeper/client
npm install
npm start
```

## Optimized build (port 5000)

```sh
cd Darksweeper/client
npm install
npm run build
npm i -g serve
serve -s build
```

## Back-end (port 3001)

```sh
cd Darksweeper
npm install
npm start
```

This is an express server that connects to a MongoDB instance in the cloud,
serves the create-react-app build directory, and connects the two using GraphQL
and Apollo.
