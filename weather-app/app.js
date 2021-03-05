const request = require('postman-request');
const chalk = require('chalk');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');


geoCode('Chon buri', (error, data) => {
    if (error) {
        console.log('Error ', error);
    } else {
        forecast(data.latitude, data.longtitude, (error, data) => {
            if (error) {
                console.log('Error', error)
            } else {

                console.log('Data', data);
            }
        });
    };
});
