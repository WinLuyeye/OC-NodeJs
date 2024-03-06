const http = require('http'); //Creation du serveur
const app = require('./app'); //Importation de express

const server = http.createServer(app); // app etant une fonction qui retournera une reponse et une requette

app.set['PORT', process.env.PORT || 3000] // 
// Ici on demare notre serveur sur le 3000 mais "process.env.PORT : c'est pour dire a l'ordinateur que si le port 3000 est occupée qu'il nous donne n'importe quel port"
server.listen(process.env.PORT || 3000); 