const request = require('postman-request');
const chalk = require('chalk');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];
if (!address){
    console.log('no address found');
}else{
    geoCode(address, (error, data) => {
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
}


