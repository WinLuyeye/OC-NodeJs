const http = require('http'); //Creation du serveur

//Le serveur doit avoir deux argument 1. La requette et 2. La reponse ; ex: req : Requette ; res : reponse.
const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !'); // Exemple du message de la reponse
});

// Ici on demare notre serveur sur le 3000 mais "process.env.PORT : c'est pour dire a l'ordinateur que si le port 3000 est occupée qu'il nous donne n'importe quel port"
server.listen(process.env.PORT || 3000); 