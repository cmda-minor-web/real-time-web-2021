# Assignments for week 2

## Intention
Last week you built a basic socket web app. The purpose was to learn about real-time communication using websockets. This week you’re going to take it to the next level and build a **meaningful** webapp that consumes an external source.
This week we will focus on client-server communication and data management.

## Assignments
1. [(Proof of) Concept](#assignment-1-proof-of-concept)
2. [Proof of Concept](#assignment-2-make-it-so)

## Assignment 1: (Proof of) Concept
Let’s create a concept! Why..? Because we always create a concept.. You can start either by writing the readme for a **meaningful** realtime application and then finding a matching API; or by looking at existing realtime APIs and finding meaningful realtime uses for them.

### Readme
We’re practicing RDD remember? Start by creating an outline for your concept in your [README.md](../README.md). Keep in mind: concepts are NOT final products. They are rough drafts that give an idea of how your **meaningful** realtime app could take shape. Here are some hints:
- What do you need to write to show how to use this?
- What features do you need to show so that other people understand what you are aiming for?
- How do you want your realtime app to be used?

Try and describe your finished realtime app as close as possible without touching any code (we know this is hard but please try). Make (pencil/paper) sketches to define basic usage, maybe you want to draw a happy little wireframe to demonstrate what you mean, make it crystal clear.

### Pick an API
[Here's a list of some realtime APIs](https://docs.google.com/spreadsheets/d/1YKMTvdWVbzJ-CXDCHBEH2n3KofcQTN7EerTOEXy9MHI/edit?usp=sharing). Let us know if you want to add any and I'll make you a collaborator.

You could, for instance, use an [API that tracks the number of crypto currency transactions globally](https://www.coinapi.io/) and estimate their CO2 impact (per currency, per transaction).

Or, you might use Amsterdam's [real-time open trash API](https://api.data.amsterdam.nl/afval/) to figure out which neighbourhoods produce the most (plastic) trash.

You could even track a trend on twitter to show the status of an important development like the recent [#trashtag event](https://twitter.com/search?q=%23trashtag&src=typd)

**Your external data source should be real-time (like a twitter feed).** If you want to build an app that uses a data source that can't be consumed in real-time (or by polling external data that changes regularly) there is an alternative. Create an app where you use a non real-time external source but where your users can manipulate the data model on your server in real time. Like this [drawing app made by Fenna de Wilde](https://live-draw.herokuapp.com/) or this [game made by Mees Rutten](https://github.com/meesrutten/real-time-web). If you don't use a real-time external data source, please check with a teacher if your concept is sufficient to pass the course.

Pick a data source and define what you want to do. You can use a real-time source you find by yourself (be weary of OAuth, poorly documented, strict rate limiting etc.) or you can pick one from [our list](https://docs.google.com/spreadsheets/d/1YKMTvdWVbzJ-CXDCHBEH2n3KofcQTN7EerTOEXy9MHI/edit?usp=sharing). If you find outdated information in the list, please update it 🙏🏼.

### Data modelling
Describe the API you intend to use, including it’s properties (rate-limiting, authorization method, API methods, etc.). Use [data modelling techniques](https://www.ibm.com/cloud/learn/data-modeling) to map the data in your API to get a grip on the structure of the data you will use. If you’ve picked a really extensive API you only need to map those parts you will actually use in your **meaningful** realtime app. Please start out by using a pencil and paper to model your data and add your sketches to the [README.md](../README.md) file.

### User testing?!
Test your concept against team- and/or squad-members. Ask what they think about your concept and if they have any additions of their own that can help you along. Write down everything they say and refine your concept.. Do this at least two times.. 

### Assignment 2: Proof of Concept

#### part 1
Reflect some of the data from the external source in a frontend view. The first step is to have your server consume data from the external source. Then you'll want to send that data to user. Finally, the frontend should deal with the data and show some HTML content.

Now that you have a one way trip (external source -> your server -> frontend) set up, you can work on a way for your user to change the data on the server using sockets.

*Resources:* [socket.io], [d3]

#### part 2
What data lives in your app universe?
What are the entry points of data in your app?
Where can the data be manipulated from?
If you want to answer these questions, making a data life cycle diagram can help. Check out [the slides](https://docs.google.com/presentation/d/1YcVYtLqdA66Wo--VtW7bGDcfk63k7TgSIrQg1IFWDdk/edit?usp=sharing) if you need more info and then follow these steps. Here's [an overview of the symbols](https://www.gliffy.com/blog/how-to-flowchart-basic-symbols-part-1-of-3) you can use and their meaning.

- Draw each of the major components of your app (usual suspects: client, your server, external resource server)
- Write under each component what’s inside its data model
- Add lines for different pieces of data shared between components
- Add information to your diagram showing the methods for getting and exposing data (e.g. pub-sub, request over socket, OAuth authorization, input validation)
- Put it in your readme. WE WILL CHECK IT DURING THE ORAL EXAM
- (Replace the sketch with a proper visualization)


### Extra challenges:
If you're certain you can meet the baseline for this course as per the rubric, these are good challenges to add:

- Security (validate user requests server side)
- Mix different communication methods (SSE, XHR/Fetch, Sockets, Long Polling)
- Offline Support (what happens when the source is unavailable, what happens when the client temporarily loses their connection to your server?)
- Add publication subscription model too elegantly keep clients up to date
- Don't use socket.io for client server communication but try the native implementation instead. Ask Bas for pointers!



[socket.io]:https://socket.io/
[d3]:https://d3js.org/

