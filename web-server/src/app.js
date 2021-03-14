const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geoCode = require('./utils/geocode');
const foreCast = require('./utils/forecast');

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../hbs/views');
const partialsPath = path.join(__dirname, '../hbs/partials');
// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static director to serve
app.use(express.static(publicDirPath));

// Routing handle
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'weather.'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        example: 'contact me : 080689641',
        title: 'help',
        name: 'JJ'
    });
});


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me?',
        name: 'JJ Nachanon.'
    });
});

app.get('/weather', (req, res) => {
    const address = req.query.address;
    
    if(!address){
        return res.send('<h1>Please input the address</h1>');
    }
    geoCode(address, (error, {latitude,longtitude}={}) => {
        if (error) {
            res.send({error});
        } else {
            foreCast(latitude,longtitude, (error, data) => {
                if (error) {
                    res.send({error})
                } else {
                    res.send({
                       location: data.location,
                       forecast: data.forecast,
                       address: address
                    });
                }
            });
        };
    });
});

// Error when routing Handle
app.get('/help/*', (req, res) => {
    res.render('errorPage', {
        msg: 'Help article not found...'
    });
});

app.get('*', (req, res) => {
    res.render('errorPage', {
        msg: 'Page not found...'
    });
});

// Setup port 
app.listen(3000, () => {
    console.log('Server is up now on port 3000....');
});