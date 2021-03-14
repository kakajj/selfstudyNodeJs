const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];
if (!address){
    console.log('no address found');
}else{
    geoCode(address, (error, {latitude,longtitude}={}) => {
        if (error) {
            console.log('Error ', error);
        } else {
            forecast(latitude,longtitude, (error, data) => {
                if (error) {
                    console.log('Error', error)
                } else {
                    console.log('Data', data);
                }
            });
        };
    });
}


