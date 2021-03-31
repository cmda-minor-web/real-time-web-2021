# Assignments for week 2

## Intention
Last week you built a basic socket web app. The purpose was to learn about real-time communication using websockets. This week you’re going to take it to the next level and build a **meaningful** webapp that consumes an external source.
This week we will focus on client-server communication and data management.

## Assignments
1. [(Proof of) Concept](#assignment-1-proof-of-concept)
2. [Proof of Concept](#assignment-2-proof-of-concept)

## Assignment 1: (Proof of) Concept
Let’s create a concept! Why..? Because we always create a concept.. You can start either by writing the readme for a **meaningful** realtime application and then finding a matching API; or by looking at existing realtime APIs and finding meaningful realtime uses for them. Choose your approach and read the corresponding paragraph below.

### Readme
We’re practicing RDD remember? Start by creating a vague outline for three concepts in your [README.md](../README.md). Make at least three variations so you can pick the best one later on. Make (pencil/paper) sketches to define basic usage, maybe you want to draw a happy little wireframe to demonstrate what you mean. Snap a photo with your phone and add your sketches to the [README.md](../README.md) file. Share your ideas with your teammates, try to find out which of your ideas has the most potential and choose wisely. 

Now.. try and describe your finished realtime app as close as possible without touching any code (we know this is hard but please try). Keep in mind: concepts are NOT final products. They are rough drafts that give an idea of how your **meaningful** realtime app could take shape. Here are some hints:
- What do you need to write to show how to use this?
- What features do you need to show so that other people understand what you are aiming for?
- How do you want your realtime app to be used?

Make some more sketches, add comments, highlight core functionality etc. to make your concept clear as daylight. Again, snap a photo with your phone and add your sketches to the [README.md](../README.md) file.

### Pick an API
Time to find an API that either carries your concept or that you can build a concept on (@cmd: remember project web last year?!) Here's a [list of some realtime APIs](https://docs.google.com/spreadsheets/d/1YKMTvdWVbzJ-CXDCHBEH2n3KofcQTN7EerTOEXy9MHI/edit?usp=sharing) we’ve collected for you. Let us know if you want to add any and I'll make you a collaborator.

You could, for instance, use an [API that tracks the number of crypto currency transactions globally](https://www.coinapi.io/) and estimate their CO2 impact (per currency or per transaction).

Or, you might use Amsterdam's [real-time open trash API](https://api.data.amsterdam.nl/afval/) to figure out which neighbourhoods produce the most (plastic) trash.

You could even track a trend on twitter to show the status of an important development like the recent [#trashtag event](https://twitter.com/search?q=%23trashtag&src=typd)

**Your external data source should be real-time (like a twitter feed).** If you want to build an app that uses a data source that can't be consumed in real-time (or by polling external data that changes regularly) there is an alternative. Create an app where you use a non real-time external source but where your users can manipulate the data model on your server in real time. Like this [drawing app made by Fenna de Wilde](https://live-draw.herokuapp.com/) or this [game made by Mees Rutten](https://github.com/meesrutten/real-time-web). If you don't use a real-time external data source, please check with a teacher if your concept is sufficient to pass the course.

Pick a data source and define what you want to do. You can use a real-time source you find by yourself (be weary of OAuth, poorly documented, strict rate limiting etc.) or you can pick one from [our list](https://docs.google.com/spreadsheets/d/1YKMTvdWVbzJ-CXDCHBEH2n3KofcQTN7EerTOEXy9MHI/edit?usp=sharing). If you find outdated information in this list, please update it 🙏🏼.

### Data modelling
Describe the API you intend to use, including it’s properties (rate-limiting, authorization method, API methods, etc.). Use [data modelling techniques](https://www.ibm.com/cloud/learn/data-modeling) to map the data in your API to get a grip on the structure of the data you will use. If you’ve picked a really extensive API you only need to map those parts you will actually use in your **meaningful** realtime app. Please start out by using a pencil and paper to model your data. Begin with a conceptual datamodel, adding more and more detail to move through a logical towards a physical data model. Don’t spend too much time on getting the details on relations... Snap a photo with your phone and add your sketches to the [README.md](../README.md) file.

**Hint:** if you really want to go berserk on the data-model you can use your favourite drawing program or [https://asciiflow.com/](https://asciiflow.com/) if you want to let your inner nerd out (example below).
```
┌─────────────┐          ┌──────────┐
│uniqueID:int ├──────────┤thisID:int│
│whatever:str │          │what:str  │
│data:blob    │          └──────────┘
│resides:str  │
│in_your:date │
│API:str      │
└─────────────┘
```

### User testing?!
Test your concept against team- and/or squad-members. Ask what they think about your concept and if they have any additions of their own that can help you along. Write down everything they say and refine your concept.. Do this at least three times.. 

## Assignment 2: Proof of Concept
So you’ve got a concept? And a grip on your API’s data? Nice..! Your next step is testing if you can actually build a reliable frontend based on the chosen API. Start out by building a spike solution testing the core idea. Once you’ve made sure you can do this you get a grip on the data-flow in your **meaningful** realtime app by creating a data lifecycle diagram. Finally you can set out to create a nice, semantic and user friendly representation of the API data in your frontend.

### Build a spike solution
A [spike solution](http://wiki.c2.com/?SpikeSolution) is a [well documented](http://wiki.c2.com/?SpikeDescribed) way of testing out a core concept in code. It’s usually a throw-out piece of code to make sure the idea you’ve got will work out. Let’s go!

Reflect some of the data from the external API in a frontend view. The first step is to have your server consume data from the external source. Then you'll want to send that data to user. Finally, the frontend should deal with the data and show some HTML content.

#### Resources
- [npm script](https://docs.npmjs.com/cli/run-script)
- [Express](https://expressjs.com/en/4x/api.html)
- [Socket.io](https://socket.io/)

### Data lifecycle diagram
What data lives in your app universe? What are the entry points of data in your app? Where can the data be manipulated from? If you want to answer these questions, making a data lifecycle diagram can help. Check out [the slides]() if you need a recap and follow the steps described below. Here's an [overview of the symbols](https://www.gliffy.com/blog/how-to-flowchart-basic-symbols-part-1-of-3) you can use and their meaning.

1. Draw each of the major components of your app (usual suspects: client, your server, external resource server)
2. Write under each component what’s inside its data model
3. Add lines for different pieces of data shared between components
4. Add information to your diagram showing the methods for getting and exposing data (e.g. pub-sub, request over socket, OAuth authorization, input validation)

Add the model to your [README.md](../README.md). **We will check this during your assessment!** You may of course replace the sketch with a proper visualisation. What’s that? Of course you can use [https://asciiflow.com/](https://asciiflow.com/) you nerd...

### Building a ‘nice’ frontend
Now that you have a *spike* that implements the core idea and grip on the *data lifecycle* for your **meaningful** realtime app, you can use everything you have learned in this and other courses to create an accessible, user-friendly, WCAG proof frontend for a realtime API. If you’ve got the frontend set-up, work on a way for your user to change the data on the server using sockets.

### Extra challenges:
If you're certain you can meet the baseline for this course as per [the rubric](https://github.com/cmda-minor-web/real-time-web-2021#grading), these are good challenges to add:

- Security (validate user requests server side)
- Mix different communication methods (SSE, XHR/Fetch, Sockets, Long Polling)
- Offline Support (what happens when the source is unavailable, what happens when the client temporarily loses their connection to your server?)
- Add publication subscription model too elegantly keep clients up to date
- Don't use socket.io for client server communication but try the native implementation instead.

