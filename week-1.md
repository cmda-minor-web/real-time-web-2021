# Excercises Week 1
Real-Time Web - Minor Web Development 

## Intention

After all you learned so far, you now will learn how to build real-time applications, and rule the world!


## Exercises
1. [Basic setup][exercise1]
2. [A unique chat app ][exercise2]
3. [Deploy your app][exercise3]

### Exercise 1: Basic setup

#### Readme (Thursday)
[Fork this repo][repo]
This week you’re going to recreate [this basic chat app][socket.io chat] with the addition of at least one new feature. Write down what your project’s all about in the readme of the project. Next week you’ll start a new project so a basic readme for this week will do.

*Resources:* [readme driven development][rdd], [mastering markdown][markdown]
*Note:* keep the docs up-to-date while working on your project.

#### Style (Thursday) 
Maybe you already have a preferred code-style, maybe you want to try something else.
Set up at least an [npm script][npm], and probably also some integration with your editor. Use Nodemon or similar to allow instant reloading while developing.

*Resources:* [xo], [standard], [prettier], [eslint]

#### Server (Thursday)
Set-up Express (or similar) for static file serving / templating

**Resources:** [express api]

### Exercise 2: A unique chat app 

Set-up socket.io. Create a basic real-time app using sockets. Bare minimum is a successful message from client to server and from server to client (“round trip”) as well as one additional chat feature YOU HAVE COME UP WITH. Here is an [example][example razpudding] I made that slowly fades out words commonly used by the people writing the chat messages forcing them to use new words.
Creating a unique feature often means storing some information about users serverside in-memory. Ask us if you have any questions about how to achieve that.

[Examples that are not unique][get started]: Storing nicknames, showing who’s online or any of the other feature requests listed at the bottom of the socket.io tutorial.

Examples that are unique: Using D3 to structure texts into svg art, using words to fight each other in a text based game, additional features you can earn if you stay in chat long enough.
**It doesn’t even have to be a chat app, just use the socket.io framework.**

Think of something that matches your skill level. If you have trouble understanding the basics of socket.io, focus on the basics (and talk to us if you need help).

Extra challenge: Instead of socket.io, use the native [server-sent-events][sse]! It works very well although sending messages from client to server is trickier.

**Resources:** [socket.io]

### Exercise 3: Deploy your app
Get your app running on the web! Put a link to your live demo at the top of your readme. Include a screenshot in the repo showing of the unique feature you built.

**Resources:** [now], [heroku], [digitalocean].  
**Note:** Don’t 😱 if this doesn’t work out this week: there’s plenty time to do it in week 2 or week 3. But it may be advantageous if you get around to deploying now


[exercise1]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-1.md#exersise-1-basic-setup 
[exercise2]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-1.md#exercise-2-a-unique-chat-app 
[exercise3]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-1.md#exercise-3-deploy-your-app
[repo]:https://github.com/cmda-minor-web/real-time-web-1819
[socket.io]:https://socket.io/
[socket.io chat]:https://socket.io/demos/chat/
[npm]:https://docs.npmjs.com/cli/run-script
[rdd]:http://tom.preston-werner.com/2010/08/23/readme-driven-development.html
[markdown]:https://guides.github.com/features/mastering-markdown/
[xo]:https://github.com/xojs/xo
[standard]:https://github.com/standard/standard
[prettier]:https://github.com/prettier/prettier
[eslint]:https://github.com/eslint/eslint
[express api]:https://expressjs.com/en/4x/api.html
[example razpudding]: https://github.com/Razpudding/socketio-chat-app
[get started]:https://socket.io/get-started/chat/
[sse]:https://www.voorhoede.nl/en/blog/real-time-communication-with-server-sent-events/
[now]:https://zeit.co/now
[heroku]:https://www.heroku.com/
[digitalocean]:https://www.digitalocean.com/


