const express = require('express')
var path = require('path')

const app = express()
const port = 80
app.use(express.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//setup public folder
app.use(express.static('public'))

app.get('/api/auth', (req, res) => {
    res.status(200).send({
        message: 'success'
    })
})

app.get('/', function (req, res) {
    res.render('pages/home')
})


app.listen(port, () => console.log(`app Started on port ${port}!`))