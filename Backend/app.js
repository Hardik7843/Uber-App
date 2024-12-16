const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectToDb = require('./db/db.js');
connectToDb();
const userRoutes = require('./routes/user.routes.js');
const captainRoutes = require('./routes/captain.routes.js')

const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes)
app.use('/captains', captainRoutes)


module.exports = app;