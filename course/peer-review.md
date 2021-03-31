# Peer review

## Goals
- Get feedback on your work
- Check if your documentation is understandable
- Find out where you stand in relation to learning goals for this course

## Preparation (please do this before attending)
- Push the latest changes to your readme, code, and/or wiki
- Make sure you’ve read and understand [the rubric](https://github.com/cmda-minor-web/real-time-web-2021#grading) for this course
- Read up on [how issues fit into the Github workflow](https://guides.github.com/features/issues/) and  make sure you know how to [write useful issues](https://upthemes.com/blog/2014/02/writing-useful-github-issues/)
- Start a call with your sub-team (eg. Squid B.1 or R2D2 C.2) in MS Teams

## Peer Review
Write feedback in issues on the repository of your peers, Use a separate issue for each point you’re making. Remember, positive feedback is also welcome and can be put into an issue! Follow the steps below for each of your sub-team members.

### Steps
- Scan your buddy's repository
    + Does the repo have an apt description?
    + Is there a link to the live demo at the top?
    + Are any files in the repo that shouldn't be there like an .env file or node_modules?
    + Is there a section about the concept, install notes, data life cycle, external API, and real-time events?
- Try to understand the concept
    + Read about the concept in the readme, do you understand what the app does?
    + Open up the live link (if it's already alive) and play around with the app
    + Review the app's functions in an issue, feel free to add cool new ideas in an issue
    + Test the app in multiple tabs, does multi-user functionality work as expected?
- Understand the data life cycle
    + Are all the app's components present in a visual diagram?
    + Is it clear what data is stored for each component?
    + Is it clear how components communicate with each other? (socket, polling, OAuth)
    + Can you follow where real-time data is created?
- Check the real-time events
    + Are all custom events described?
    + Can you imagine how the client-server communication works now that you know which events are used?
- Review the API info
    + Is it clear what data the external API offers?
    + Are instructions present on how to get a key from the API and how to connect to it?
### Switch!
Follow the steps again for each of your sub-team members, add issues for feedback not already mentioned, add your own insights to issues created by other sub-team members.

## Wrapping up
- Review the issues that were created for your own repo. Ask your reviewers about them if you don't understand.
- Respond to the issues with a message describing which action you take. For instance: valid point, will fix. Or: I won't fix this because of ...
- Close issues when they are solved.