var path = require('path'),
    express = require('express'),
    app = express()

const APP_PORT = 9090
const APP_STATIC = 'static'
const INDEX_FILE = 'index.html'
const APP_STATIC_ROUTER = `/${APP_STATIC}`
const APP_STATIC_PATH = path.join(__dirname, APP_STATIC)

app.use(APP_STATIC_ROUTER, express.static(APP_STATIC_PATH))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, INDEX_FILE))
})

app.listen(APP_PORT, () => {
    console.log(`Listening on port ${APP_PORT}`)
})