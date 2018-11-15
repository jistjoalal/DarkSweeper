# Darksweeper
minesweeper with a dark theme and other cool features!

[Play Darksweeper!
![demo](https://i.gyazo.com/5f357692c2dae9806ea7e882a867847c.png)
](http://darksweeper.com)



- original simultaneous click to clear, guaranteed safe start
- any size grid
- RNG mines
- x-ray vision for when you don't want to guess or just want to cheat
- [3BV](http://www.minesweeper.info/wiki/3BV) Scoring

## Why?
I like minesweeper but I also like my eyes. And because I hate guessing and
wanted the power to xray the board. And to learn how to use React!

## More ideas / takeaways
- I really want a leaderboard. I'm inching my way towards knowing enough
back-end to make it happen.
- "Hint" button which searches the board for suggested moves. This could lead
to "solvability" calculations, which sounds fun! Scoring the board was a blast.
- React is cool. AWS elastic beanstalk is cool. Managing state is the main
challenge in React. Minesweeper is fun to program.

# Download
`git clone git@github.com:jistjoalal/DarkSweeper.git`

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
This is just a barebones express server serving up the build folder. I'm gonna
use it to make the leaderboard, and maybe a few other routes.