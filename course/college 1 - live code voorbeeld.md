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

app.use(express.static(path.resolve('public')))
```

## Stap 3 - Socket.io
We runnen het commando `npm install socket.io` om dit pakketje binnen te trekken. Het wordt daarmee automagisch als dependency opgenomen in package.json (nice!).

Is iedereen bekend met de event loop in (node).js? Het is wel een ingewikkeld ding maar ik probeer die heel gesimplificeerd uit te leggen zodat je een idee hebt. Voor de nerds kunnen we daar later dieper op in gaan.. animo? (zie sheet!)

`Socket.io` propageert zelf events, daar kunnen we dus een event listener aan koppelen en iets doen. We passen het server script aan om een console bericht te loggen zodra er een gebruiker verbinding maakt met via socket.io, dat zie je aan het `connection` event.

```
const io = require('socket.io')(http)
const port = process.env.PORT || 4242

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

Uitproberen in de console met `nodemon start`, nodemon is heel handig tijdens developen want die update de draaiende code zodra er in de source iets veranderd.

## Stap 4 - event propagation
Het grote idee achter socket.io is het afvuren en versturen (engels propagation) van events. Laten we *client-side* een event op de socket plaatsen als de gebruiker via het formulier een event verstuurt.

```
...
var messages = document.querySelector('section ul')
var input = document.querySelector('input')

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  if (input.value) {
    socket.emit('message', input.value)
    input.value = ''
  }
})

```

In het kort i) luisteren (!) we naar het ‘submit’ event van het formulier, ii) stoppen de standaardactie (versturen en verversen van de huidige pagina), iii) checken of er inderdaad iets in het invoerveld staat, iv) versturen datgene in het invoerveld dmv. `emit` (uitzenden/uitstoten) en v) maken het invoerveld leeg. Nb alléén de server ontvangt dit event.

Natuurlijk moet er ook op de server *geluisterd* worden naar dit type event op de socket. We voegen de volgende afhandeling toe:

```
socket.on('message', (message) => {
  console.log('message: ' + message)
})
```

Check het resultaat in de console! Okee we zijn nu op de server, elke client die connect kan berichten sturen die `console.log`ed worden. Nu moeten alle clients nog weten dat er ook berichten zijn. We sturen opnieuw via `emit` een event op de socket, nu vanaf de kant van de server. Nb. álle clients krijgen dit event. 

We breiden het script op de client uit om iets met dit event te doen, dat doen we door het toevoegen van een.. je raad het al.. event-listener. Voeg de volgende code toe.

```
...
socket.on('message', function(message) {
  var element = document.createElement('li')
  element.textContent = message
  messages.appendChild(element)
  messages.scrollTop = messages.scrollHeight
})
```

En klaar is onze barebone chat app.. chat mee op [https://barebonechat.herokuapp.com/](https://barebonechat.herokuapp.com/)