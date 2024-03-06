const express = require('express') //Creation et importation de express

const app = express();

app.use((req, res, next) => {

console.log("hello")
next()
})

app.use((req, res, next) =>{
res.status(300);
next()
})

app.use((req, res, next) => {
    res.json({ message : 'Succes'})
    next()
})

app.use((req, res) => {
    console.log('Reponse enviyer avec succes !')
})
module.exports = app; //Exportaer express pour lui rendre accessible ou importable a tous.
