# FloppySiteV2
This is the second iteration of my FloppySite project, a website which serves to host my projects other random things I want to write about.

If you are unfamiliar with react, here are the basic commands: (do all of these in order to get project to same state as in repository)

- `npm install -g` installs node-modules for project

- `npm start` starts the react site as a local server which can be accessed through the browser

- `npm run build` builds the react site into something which can be used on the internet (result in build directory)

<br>

Other commands like `npm test` and `npm run eject` are important too, but not for this repo.
(do not mind vulnerabillities after install)

~~React Router 6 is used to switch pages. As a result, github-pages cannot be used (look it up, there are tons of problems due to it working on html5)~~

I use HashRouter now because React Router just kinda... breaks? Like all of the time? But only for certain people at certain times? idk man I like HashRouter now I guess.

<br>

Old version of FloppySite can be seen at [https://brianchill.us/old/index.html](https://brianchill.us/old/index.html)

Note: I leave my build directory in this repo as to make deployment easier. If you want to run this exact site locally, just run `serve -s build`
