const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')

const items = require('./routes/api/items')

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

// Connect mongoDB

mongoose.connect(db, { useNewUrlParser: true })
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err))

// Server statics assets if in production 
if(process.env.NODE_ENV === 'production') {
    // SET static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

// Use route
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listen on the port ${port}`))