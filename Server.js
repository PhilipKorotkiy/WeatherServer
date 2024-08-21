const express = require('express')
const path = require('path')
const fs = require('fs');

const app = express()
const port = 3000

let lastheartbeat = 0;

setInterval(function () {
    lastheartbeat+=0.1;
}, 100)

app.use(express.json())

app.post('/heartbeat', (req, res) => {
    console.log("Heartbeat in: " + lastheartbeat)
    console.log("Data: " + req.body)
    lastheartbeat = 0;
    res.sendStatus(200)
})  

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})