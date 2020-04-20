# Peer review exercise

## Goal
- Get feedback on your work
- Check if your documentation is understandable
- Find out where you stand in relation to the assessment

## Preparation
- Push the latest changes to your readme, code, and wiki
- [Read the rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vTC69BUOGNQj_bLQE9LiprKGYChzb4LOoROoUiLUP8DReOcFLqS5k90Wu1LK9L5r1IVq7BDA1qISp5u/pubhtml)
- PM your peer on Slack. Peers are number 1 & 2 in and number 3 & 4 in [this sheet](https://docs.google.com/spreadsheets/d/1xCoCAt1HcCSeiww15oz-m1B8g2GaE8pcRMeyQVaSVzA/edit?usp=sharing)
- Start a jitsi call with your buddy by typing /jitsi if you're number 1 or 3.

## Peer Review
Write your feedback in issues on their repo (separate issue for each thing). 
- [How issues fit into the Github workflow](https://guides.github.com/features/issues/)
- [How to write useful Github issues](https://upthemes.com/blog/2014/02/writing-useful-github-issues/)
Positive feedback is also welcome and can be put into an issue

### Repository
- Scan your buddy's repository
    + Does the repo have an apt description?
    Is there a link to the live demo at the top?
    + Are any files in the repo that shouldn't be there like a .env or node_modules?
    + Is there a section about the concept, install notes, data life cycle, external API, and real-time events?
- Understand the concept
    + Read about the concept in the readme, do you understand what the app does?
    + Open up the livelink (if it's already live) and play around with the app
    + Review the app's functions in an issue, feel free to add cool ideas in an issue
    + Test the app in multiple tabs, does multi-user functionality work as expected?
- Understand the data life cycle
    + Are all the app's components present in a visual diagram?
    + Is it clear which data is stored for each component?
    + Is it clear how components communicate with each other? (socket, polling, OAuth)
    + Can you follow where real-time data is created?
- Check the real-time events
    + Are the custom events described?
    + Can you imagine how the client-server communication works now that you know which events are used?
- Review the API info
    + Is it clear what data the external API offers?
    + Are there instructions on how to get a key from the API and how to connect to it?

## Closure
- Review the issues that were created for your own repo. Ask your reviewer about them if you don't understand.
- Respond to the issues with a message describing which action you take. For instance: valid point, will fix. Or: I won't fix this because of ...
- Close issues when they are solved.