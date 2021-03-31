# Assignments for week 3

## Intention
Last week you started work on a **meaningful** webapp that consumes an external source. This week you will learn how to store and serve data from an external source to your own clients. We'll also provide extra challenges, it's up to you if you want to add fancy features or make the app more secure. Just be sure to check your features against [the rubric](https://github.com/cmda-minor-web/real-time-web-2021#grading) and to always properly test with multiple users.

## Assignments
1. [Data management](#assignment-1-data-management)
2. [User testing](#assignment-2-user-testing)
3. [(Optional) Not ignoring the UI stack](#optional-assignment-3-not-ignoring-the-ui-stack)

## Assignment 1: Data management
You probably want to persist data in a database (tunnel event, initial load, etc.) so set up some of way of storing the data. If you want to start out simple, store the data in-memory first (like an array of data items) and move it to a database later. 

Describe the chosen database system in your [README.md](../README.md). Make sure you only store the data you **actually need** for your application. This almost always involves cleaning and restructuring the data. For instance, if the external API you chose returns a complex object with confusing property names, use the functional programming trinity: [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) to change the data to your own format.

## Resources
Databases: [levelup](https://github.com/level/levelup), [mongo](https://www.npmjs.com/package/mongodb), [redis](https://github.com/NodeRedis/node_redis), [postgres](https://github.com/brianc/node-postgres)

Cleaning data: [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Assignment 2: User testing
Make sure that by Friday, your app works with at least three people connected (preferably more) at the same time. They will probably need different parts of your database so you will need to set up some server-side functionality that serves a specific part of your database depending on the type or request a clients sends. These types of requests like “getLatestData” or “sendMessage” form the basis of the API of *your* server. think about which methods/ events your server will have/ allow and describe them in your [README.md](../README.md). It’s okay if not all methods work yet but try to plan ahead, after all, we’re practicing RDD right?!

## (Optional) Assignment 3: Not ignoring the UI stack
You’ve probably heard something about building robust interfaces [without ignoring the UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/). Try to address all states (blank, loading, partial, error, ideal) in your **meaningful** realtime webapp but take them on one state at a time. Use the scenario’s below to test if  your app informs and helps the user to stay in control, even if his internet connection fails..

Build adequate user feedback for the following scenario's:
- The client can't reach the server. What does the user see? Can they still generate content which is served to the server when the connection resumes? Think about the tunnel event and how socket.io handles this out of the box. Should that behaviour change for your app? Think about queueing (real world) messages bot client and server side.
- The server can't reach the client. Should it do anything with its data model? Should other users be notified?
- The server can't reach the external source. Can the app still work? What should the end users see?

