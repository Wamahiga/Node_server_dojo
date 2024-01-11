const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger')
const members = require('./Members');


const app = express();

//init middleware
// app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//homepage route
app.get('/', (req, res) => res.render('index'));



//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));


//members api route
app.use('/api/members',require('./routes/api/members'));

app.get('/', (req, res) =>{
    res.send("<h1>Hello World!!</>")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));