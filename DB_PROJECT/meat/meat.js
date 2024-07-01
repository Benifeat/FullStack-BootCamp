const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const fileUpload = require('express-fileupload');
require('ejs');
const fs = require('fs');

/********** VARIABLES **********/
let port = process.env.PORT ? process.env.PORT : 3053;
let nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';
hostingDir = nodeEnv === 'development' ? '' : '/beni/projects/DB_PROJECT/meat';

/*********** DB CONNECTION **********/
const db = mysql.createConnection({
    host: 'localhost', // or '127.0.0.1'
    port: 3306,
    database: process.env.DB_NAME,
    user: process.env.DB_USER, 
    password: process.env.DB_PASS
})

db.connect(err => {
    if (err) {
        throw(err);
    }
    console.log('I feel lucky today. I\'ve connected to DB!!!');
});

/***** CREATE THE SERVER ******/
const app = express();
global.db = db;

/***** VARIABLES OF EXPRESS ******/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

/******* MIDDLEWARE *********/
app.use(hostingDir, express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

/******* ROUTING *********/
const home = require('./model/home')(hostingDir);

app.get(`${hostingDir}/`, home.getHomePage);
app.get(`${hostingDir}/add`, home.getAddPage);
app.post(`${hostingDir}/add`, home.postAddPage);
app.get(`${hostingDir}/edit/:id`, home.getEditPage);
app.post(`${hostingDir}/edit/:id`, home.postEditPage);
app.get(`${hostingDir}/delete/:id`, home.getDeletePage);

/*********LISTENER *********/
app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
});