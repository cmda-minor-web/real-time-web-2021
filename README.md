# Pokémon Free 4 All
This web application is a real time multiplayer game. The user can choose between 3 pokémon sprites, fetched by the [Poké API](https://pokeapi.co/). The goal of the game is to defeat the oppnonents by shooting them down (based on the mini game Tanks).

## Concept
Choose a starter pokemon as your character to find your opponents.
<img src="docs/images/choose_starter.png" alt="Choose starter" />

When a pokemon is chosen, you'll enter a random available room to find opponents in. A maximum of 4 players can join the same room.
<img src="docs/images/game-preview.png" alt="Preview of the game" />

## Data Model


## How to use?
>💡The application uses different modules and libraries, which will automatically be installed when following the guide below.
#### Dependencies
- [Node JS](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [Socket.io](https://www.npmjs.com/package/socket.io)
- [Node-fetch](https://www.npmjs.com/package/node-fetch)
- [GraphQL](https://www.npmjs.com/package/graphql)

#### Developer Dependencies
- [Nodemon](https://www.npmjs.com/package/nodemon)

#### Guide
1. Download the zip-file or clone the repo
2. Run `npm i` inside the terminal to install dependency packages
3. Run the application in local mode:
    ```terminal
    npm run start
    ```
    or development mode:
    
    ```terminal
    npm run dev
    ```