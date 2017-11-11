const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const schemas = require('./graphql/schema');
const index = require('./routes/index');
const users = require('./routes/users');

const url_db = process.env.mongodb || "mongodb://localhost/easymarket";

const app = express();

mongoose.connect(url_db,function(err){
  console.log("connect db")
});


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/EasyMarket');


var db = mongoose.connection;

db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
 console.log( '+++Connected to mongoose')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use('/graphql', graphqlHTTP (req => ({
  schema:schemas,
  rootValue:global,
  graphiql:true
})))

app.all("*", (req, res, next) => res.sendFile(path.join(__dirname, "public", "index.html")));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
