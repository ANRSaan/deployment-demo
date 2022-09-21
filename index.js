const express = require('express')
const path = require('path')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(4000, ()=> {
    console.log('Docked at port 4000')
})