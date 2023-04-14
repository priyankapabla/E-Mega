require('dotenv').config()
const connectToMongo = require('./db')
const express = require('express')
const multer = require('multer')
connectToMongo();
const app = express()
var cors = require('cors');
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
app.use(cors({ origin:true, credentials:true }));
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(cors());
const port = 5000
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/g',require('./routes/gate_stoken'))
app.use('/api/c',require('./routes/complains_route'))
app.use('/api/b',require('./routes/room_allot'))
app.use('/api/a',require('./routes/attendence'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
})
