import express from 'express'

const app = express()
const port = 3000

app.get('/pessoa', ( req, res) => {
    res.send({
        nome:"kevin",
        email: "kevin@email.com",
        idade: 21,
        hobbies: ['livros', 'videogame', 'musica']
    })
})

app.get('/listapessoas', ( req, res) => {
    res.send([
        {
            nome:"kevin",
            email: "kevin@email.com",
            idade: 21,
            hobbies: ['livros', 'videogame', 'musica']
        },
        {
            nome:"adilson",
            email: "adilson@email.com",
            idade: 15,
            hobbies: ['boliche', 'filme', 'musica']
        },
        {
            nome:"edivaldo",
            email: "edivaldo@email.com",
            idade: 21,
            hobbies: ['cart', 'dança', 'filmes']
        },
    ])
})

app.listen( port, () => console.log( 'App listening: ' + port ))
