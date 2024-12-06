const app = require('./app.js')
const PORT = process.env.PORT || 5002
const http = require('http')

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});