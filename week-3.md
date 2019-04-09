# Exercises Week 3
Real-Time Web - Minor Web Development 

## Intention

Last week you built a basic socket web app. The purpose was to learn about real-time communication using websockets. This week you’re going to take it to the next level and build a **meaningful** webapp that consumes an external source. you will learn how to store and serve data from an external source to your own clients. We'll work on this app for the last two weeks of the course.

## Excercises
1. [Hook up a database][exercise1]
2. [Test your app][exercise2]

### Exercise 1: Hook up a database
You probably want to persist data in a database (“tunnel event”, initial load, etc.) so set up some of way of storing the data. If you want to start out simple, store the data in-memory first (like an array of data items) and move it to a database later. Describe the chosen database system in the project's readme. Make sure you only store the data you NEED for your application. This almost always involves cleaning and restructuring the data. For instance,if you get back a complex object with confusing property names, use map,filter,reduce to change the data to your own format. 

**Resources:** 
* Databases: [levelup], [mongo], [redis], [postgres]  
* Cleaning data: [array], [string], [object]

### Exercise 2: Test your app

Make sure your app works with at least three people connected (preferably more) at the same time. They will probably need different parts of your database so you will need to set up some server-side functionality that serves a specific part of your database depending on the type or request a clients sends. These types of requests like “getLatestData” or “sendMessage” form the basis of the API of YOUR server. think about which methods/events your server will have/allow and describe them in your readme. It’s OK if not all methods work yet but try to plan ahead.


[exercise1]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#exersise-1-pick-a-real-time-source
[exercise2]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#exercise-2-reflect-data
[levelup]:https://github.com/level/levelup
[mongo]:https://www.npmjs.com/package/mongodb
[redis]:https://github.com/NodeRedis/node_redis
[postgres]:https://github.com/brianc/node-postgres
[array]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[string]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[object]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

