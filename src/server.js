const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'))
app.use(express.static('dist'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/friends', (req, res) => res.json([
    {
        name:"Maung Maung",
        occupation:"loser"
    },
    {
        name:"Aung Aung",
        occupation:"loser"
    },
    {
        name:"Kyaung Kyaung",
        occupation:"king of losers"
    }
]))

app.get('/sample-html', (req, res) => res.sendFile(path.join(__dirname + '/sample.html')) )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))