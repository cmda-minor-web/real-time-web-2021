# Excercises Week 1

## Intention
After all you learned so far, you now will learn how to build real-time applications, and rule the world!

## Assignments
1. [Make it so! (team)](#assignment-1-make-it-so)
2. [Make it so! (individually)

## Assignment 1: Make it so!
This is a team exercise which means you work together on one repository. (Of course you will all fork it if the work is done so you’ve got your own copy in your own portfolio ;)). During this course we will use *readme driven development* (RDD) which is a way of organising your work. Use this - relatively simple - assignment to get a grip on the way you set up a project in this course.

### Readme
Start out by forking [this repository](https://github.com/cmda-minor-web/real-time-web-2021) to one of your github accounts. Add all your team members as collaborator so you can work together.

Read this [article about RDD](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) if you haven’t already and look at [some of the examples in this gist](https://gist.github.com/stefanbirkner/835b7d0c498b4026f65a). Discuss findings, insights and/or allergies you encounter in with team. As you will be using markdown a lot when writing readme files you might want to freshen your knowledge by scanning [mastering markdown](https://guides.github.com/features/mastering-markdown/).

*Note:* keep your documentation up-to-date while working on your project!

### Coding Style
Maybe you already have a preferred code-style, maybe you want to try something else. Discuss the style you will use during this project and write up a few basic rules in a section in your readme. You can look at some of the style guides below but keep in mind that these are very extensive, for this project (and your own sanity), please keep it simple.

Set up at least an [npm script](https://docs.npmjs.com/cli/run-script). You will probably want some integrations with your editor. Use Nodemon or similar to allow instant reloading while developing.

#### Resources
*Styleguides:* [w3schools.com .js conventions](https://www.w3schools.com/js/js_conventions.asp), [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html), [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
*Linters/auto-formatting:* [xo](https://github.com/xojs/xo), [standard](https://github.com/standard/standard), [prettier](https://github.com/prettier/prettier), [eslint](https://github.com/eslint/eslint), [vscode marketplace](https://marketplace.visualstudio.com/search?term=ES)

### Serving static files
Set-up [Express](https://expressjs.com/en/4x/api.html) for static file serving or templating (optional). Implement your team page so that it will be served through express.

### Implement socket.io
Set-up [socket.io](https://socket.io/). Create a basic real-time app using sockets. Bare minimum is a successful message from client to server and from server to all connected clients (“round trip”). You can use the [live coded example](https://github.com/ju5tu5/barebonechat) or the [chat demo from socket.io](https://socket.io/demos/chat/) to get started.

### Deploy on Heroku
Get your app running on [Heroku](https://www.heroku.com/)! Add a link to your live demo  and a screenshot showing of your team page including the new chat functionality at the top of your readme.

**Note:** Don’t 😱 if this doesn’t work out: there’s plenty time to deploy in week 2 or week 3. But it may be advantageous to deploy now so you can make sure all team members understand how to do this.

### Extra challenges
Try to add an extra feature from the list below to your basic chat app. Do this one step at a time, each time discussing with your team what feature would be nice and how you would go about implementing it. Ask for help if you need it! **Note**: Update your readme vigourously ;) 

- Add support for nicknames.
- Broadcast a message to connected users when someone connects or disconnects.
- Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
- Add “{user} is typing” functionality.
- Show who’s online.
- Add private messaging.





Examples that are unique: Using D3 to structure texts into svg art, using words to fight each other in a text based game, additional features you can earn if you stay in chat long enough.

Think of something that matches your skill level. If you have trouble understanding the basics of socket.io, focus on the basics (and talk to us if you need help).

Extra challenge: Start working on the final app. [Look at the exercises from week 2](https://github.com/cmda-minor-web/real-time-web-1920/blob/master/course/week-2.md), pick an API and think of a strong concept. Start working on that instead of a barebone app.

Extra challenge: Instead of socket.io, use the native [server-sent-events][sse]! It works very well although sending messages from client to server is trickier.





[sse]:https://www.voorhoede.nl/en/blog/real-time-communication-with-server-sent-events/