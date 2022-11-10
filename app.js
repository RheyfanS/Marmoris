const express = require('express');
// const express = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8008;
const path = require('path');
const mongoose = require('mongoose')
const db = mongoose.connection;
const dbConfig = require('./config/DbConfig')
const cors = require('cors')

mongoose.connect(dbConfig.mongoURL, {
  useNewUrlParser: true
}).then(() => console.log("Connect Mongodb"))
    .catch(err => console.log(err))

app.use(cors())
app.use(bodyParser.json({
  extended: true,
  limit: '50mb'
}))

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}))

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('login')
})

app.get('/home', (req, res) => {
  res.render('home')
})


app.use('/user', require('./routes/User'))
app.listen(port, () => {
  console.log(`Marmoris app || listening on port ${port}`)
})
// mongoose.connect('mongodb://127.0.0.1:27017/tugasimpal', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

// db.on('error', (error) => console.log(error));
// db.once('open', () => console.log('Database Connected...'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//   res.render('index')
// })

// app.listen(port, () => {
//   console.log(`app listening on port ${port}`)
// })

