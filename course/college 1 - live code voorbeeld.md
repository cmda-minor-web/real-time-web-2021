# Live code college 1
Gevoed door [https://socket.io/get-started/chat](https://socket.io/get-started/chat) en uitgewerkt in [https://github.com/ju5tu5/barebonechat](https://github.com/ju5tu5/barebonechat).

## Stap 1 - Basic Node + Express (AKA Project Tech)
Minimale express app, het enige dat nodig is is een `npm init` en `npm install express`. Daarmee heb je vanuit node.js de mogelijkheid te luisteren naar een poortnummer en daar een response op te geven. In dit geval een heel simpele response na een call op `/`, de root van een website.

```
const express = require('express')
const app = express()
const http = require('http').createServer(app)

app.get('/', (request, response) => {
  response.send('<h1>Hallo wereld!</h1>')
})

http.listen(4242, () => {
  console.log('listening on 4242')
})
```

## Stap 2 - Serving HTML
Het zou naar zijn om alle HTML te *embedden* in javascript. Vroeger in PHP was dit de normale manier van werken maar wij vinden scheiden van inhoud/ vormgeving/ functionaliteit belangrijk. Dus.. we stoppen wat HTML en CSS in een bestand en serveren dat.

```
const path = require('path')

// app.get vervangen!
response.sendFile(path.resolve('public', 'index.html'))
```

## Stap 3 - Socket.io
We runnen het commando `npm install socket.io` om dit pakketje binnen te trekken. Het wordt daarmee automagisch als dependency opgenomen in package.json (nice!).

Is iedereen bekend met de event loop in Javascript? Het is wel een ingewikkeld ding maar ik probeer die heel gesimplificeerd uit te leggen zodat je een idee hebt.

```

```

`Socket.io` propageert zelf events, daar kunnen we dus een event listener aan koppelen en iets doen. We passen het server script aan om een console bericht te loggen zodra er een gebruiker verbinding maakt met via socket.io, dat zie je aan het `connection` event.

```
const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('a user connected');
});
```

Om de boel werken te krijgen moet er wel een gebruiker connecten. Daarom passen we de static file `/public/index.html` aan. `Socket.io` zorgt zelf voor de afhandeling van alle aanvragen op `http://example.com/socket.io/`, daar hoeven we dus verder niets voor te doen (w00t!).

```
  <script src="/socket.io/socket.io.js"></script>
  <script>
    var socket = io();
  </script>
```

Als een gebruiker connectie maakt zie je de log message die we ingesteld hebben, misschien willen we ook zien wanneer een gebruiker disconnect.

```
...
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
...
```

## Stap 4 - event propagation

