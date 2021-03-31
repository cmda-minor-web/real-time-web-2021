# Assignments for week 1

## Intention
After all you learned so far, you now will learn how to build real-time applications, and rule the world!

## Assignments
1. [Make it so! (team)](#assignment-1-make-it-so)
2. [Make it so! (individually)](#assignment-2-make-it-so)

## Assignment 1: Make it so!
This is a team exercise which means you work together on one repository. (Of course you will all fork it if the work is done so you’ve got your own copy in your own portfolio ;)). During this course we will use *readme driven development* (RDD) which is a way of organising your work. Use this - relatively simple - assignment to get a grip on the way you set up a project in this course.

### Readme
Start out by forking [this repository](https://github.com/cmda-minor-web/real-time-web-2021) to one of your github accounts. Add all your team members as collaborator so you can work together.

Read this [article about RDD](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) if you haven’t already and look at these [notes about RDD](https://deterministic.space/readme-driven-development.html) and [some of the examples in this gist](https://gist.github.com/stefanbirkner/835b7d0c498b4026f65a). Discuss findings, insights and/or allergies you encounter in with team. As you will be using markdown a lot when writing readme files you might want to freshen your knowledge by scanning [mastering markdown](https://guides.github.com/features/mastering-markdown/).

Write your [README.md](../README.md) and get started on your project. As a team you will discuss details, make sketches, make decisions, divide tasks etc. Write all of this down so everyone has an idea of what to work on. 

*Note: keep your documentation up-to-date while working on your project!*

*Note: Keep a teams meeting open in your squad channel while you work so we can find you and invite us into your meeting when you need help.*

### Coding Style
Maybe you already have a preferred code-style, maybe you want to try something else. Discuss the style you will use during this project and write up a few basic rules in a section in your readme. You can look at some of the style guides below but keep in mind that these are very extensive, for this project (and your own sanity), please keep it simple.

Set up at least an [npm script](https://docs.npmjs.com/cli/run-script). You will probably want some integrations with your editor. Use Nodemon or similar to allow instant reloading while developing.

#### Resources
*Styleguides:* [w3schools.com .js conventions](https://www.w3schools.com/js/js_conventions.asp), [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html), [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
*Linters/auto-formatting:* [xo](https://github.com/xojs/xo), [standard](https://github.com/standard/standard), [prettier](https://github.com/prettier/prettier), [eslint](https://github.com/eslint/eslint), [vscode marketplace](https://marketplace.visualstudio.com/search?term=ES)

### Serving static files
Set-up [Express](https://expressjs.com/en/4x/api.html) for static file serving or templating (optional). Implement your team page so that it will be served through express.

### Implement socket.io
Set-up [socket.io](https://socket.io/). Create a basic real-time app using sockets. Bare minimum is a successful message from client to server and from server to all connected clients (“round trip”). You can use the [live coded example](https://github.com/ju5tu5/barebonechat) or the [chat demo from socket.io](https://socket.io/get-started/chat/) to get started.

### Deploy on Heroku
Get your app running on [Heroku](https://www.heroku.com/)! First install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) if you didn’t already.
Add a link to your live demo  and a screenshot showing of your team page including the new chat functionality at the top of your readme.

**Note:** Don’t 😱 if this doesn’t work out: there’s plenty time to deploy in week 2 or week 3. But it may be advantageous to deploy now so you can make sure all team members understand how to do this.

### Extra challenges
Try to add an extra feature from the list below to your basic chat app. Do this one step at a time, each time discussing with your team what feature would be nice and how you would go about implementing it. Ask for help if you need it! **Note**: Update your readme vigourously ;) 

- Add support for nicknames.
- Broadcast a message to connected users when someone connects or disconnects.
- Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
- Add “{user} is typing” functionality.
- Show who’s online.
- Add private messaging.

### Great job! Now wrap it up...
Review the project as a team, create issues for everything that needs extra attention if you would have more time. Update [README.md](../README.md) to reflect the latest changes, take new screenshots, link to all team members etc. Finally, have all team members fork this repo so you each have a copy in your own Github account - it’s your technical portfolio.

## Assignment 2: Make it so!
This individual exercise is not alltogether different from [assignment 1](#assignment-1-make-it-so) - the one you did as a team.. remember? It even bears the same name! For assignment 2 (this one) you will collect all of your experience and go full-out on a unique realtime app. Again you will use *readme driven development* (RDD). Use this assignment to start your adventure towards comprehension of the realtime universe.

### Readme
You have probably forked your team project at the end of last assignment. Create a new branch called ‘team-page’ and switch back to the main branch. By branching out we’ve created a snapshot of this repository at this point, you can always find the code by switching to the ‘team-page’ branch. You will be working on this project by yourself so there is no need to add collaborators to Github.

Think up unique features that will make your chat much more interesting. What is unique? Not unique are storing nicknames, showing who’s online or any of the other feature requests listed at the bottom of the [socket.io tutorial](https://socket.io/get-started/chat/). Unique is using D3 to structure text into SVG art, using words to fight each other in a text based game, additional features you can earn if you stay in chat long enough. It doesn’t even have to be a chat app, just use the socket.io framework.

Think of something that matches your skill level. If you have trouble understanding the basics of socket.io, focus on the basics (and talk to us if you need help).

Write your [README.md](../README.md), use the resources below and *make it so*!

#### Resources
You’ve probably read all these before in [assignment 1](#assignment-1-make-it-so):
- [article about RDD](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html)
- [notes about RDD](https://deterministic.space/readme-driven-development.html)
- [some RDD examples](https://gist.github.com/stefanbirkner/835b7d0c498b4026f65a)
- [mastering markdown](https://guides.github.com/features/mastering-markdown/).
- [npm script](https://docs.npmjs.com/cli/run-script)
- [w3schools.com .js conventions](https://www.w3schools.com/js/js_conventions.asp)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [xo](https://github.com/xojs/xo)
- [standard](https://github.com/standard/standard)
- [prettier](https://github.com/prettier/prettier)
- [eslint](https://github.com/eslint/eslint)
- [vscode marketplace](https://marketplace.visualstudio.com/search?term=ES)
- [Express](https://expressjs.com/en/4x/api.html)
- [Socket.io](https://socket.io/)
- [Live coded example](https://github.com/ju5tu5/barebonechat)
- [Chat demo from socket.io](https://socket.io/get-started/chat/)
- [Heroku](https://www.heroku.com/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) 

### Extra challenges
Again, try to add extra features from the list below to your basic chat app. Do this one step at a time. Ask for help if you need it! **Note**:Again, update your readme zealously :P 

- Add support for nicknames.
- Broadcast a message to connected users when someone connects or disconnects.
- Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
- Add “{user} is typing” functionality.
- Show who’s online.
- Add private messaging.

*Extra challenge: Start working on your final app. [Look at the exercises from week 2](./week-2.md), pick an API and think of a strong concept. Start working on that instead of a barebone app*.

*Extra challenge: Instead of socket.io, use the native [server-sent-events](https://www.voorhoede.nl/en/blog/real-time-communication-with-server-sent-events/)! It works very well although sending messages from client to server is trickier.*