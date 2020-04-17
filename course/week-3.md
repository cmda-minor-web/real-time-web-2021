# Exercises Week 3

## Intention

Last week you started work on a **meaningful** webapp that consumes an external source. This week you will learn how to store and serve data from an external source to your own clients. We'll also provide extra challenges and hopefully start testing each others apps.

### (Optional) Exercise 1: Hook up a database
You probably want to persist data in a database (“tunnel event”, initial load, etc.) so set up some of way of storing the data. If you want to start out simple, store the data in-memory first (like an array of data items) and move it to a database later. Describe the chosen database system in the project's readme. Make sure you only store the data you NEED for your application. This almost always involves cleaning and restructuring the data. For instance,if you get back a complex object with confusing property names, use map,filter,reduce to change the data to your own format. 

*Resources:*
* Databases: [levelup], [mongo], [redis], [postgres]  
* Cleaning data: [array], [string], [object]


### Optional Exercise 2: Offline support
Build support for the following scenario's:
- The client can't reach the server. What does the user see? Can they still generate content which is served to the server when the connection resumes? Think about the tunnel event and how socket.io handles this out of the box. Should that behavior change for your app? Think about queueing (real word) messages bot client and server side.
- The server can't reach the client. Should it do anything with its data model? Should other users be notified?
- The server can't reach the external source. Can the app still work? What should the end users see?

[levelup]:https://github.com/level/levelup
[mongo]:https://www.npmjs.com/package/mongodb
[redis]:https://github.com/NodeRedis/node_redis
[postgres]:https://github.com/brianc/node-postgres
[array]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[string]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[object]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

