const request = require('postman-request');
const chalk = require('chalk');

const url = 'http://api.weatherstack.com/current?access_key=ad06d583e42ea75dd35231ca63a90baf&query=37.8267,-122.4233&units=f';

request({url: url, json: true }, (error,response)=>{
    if(error){
        console.log('Unable to connect to weather service');
    }else if(response.body.error){
        console.log('Unable to find location..');
    }else{
        console.log(chalk.greenBright.inverse('Now, we are in '+response.body.location.region))
        console.log(chalk.greenBright.inverse(
            response.body.current.weather_descriptions+
            '. It is currently '+response.body.current.temperature+ 
            ' faren out. But it\'s feels like '+response.body.current.feelslike+
            ' faren out.'));
    }
});

const secondUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bangkok.json?access_token=pk.eyJ1Ijoia2FrYWpqIiwiYSI6ImNrbHJzejVqeTAzcGkyb252Yjl0eDY0d3QifQ.Lyv-UpiUTXT86yJ9yO0AQA&limit=1';

request({url:secondUrl,json: true},(error,response)=>{
    if(error){
        console.log('Unable to connect with MapBox...');
    }else if(response.body.features.length===0){
        console.log('Unable to find the location, pls input the right name...');
    }else{
        const latitude = response.body.features[0].center[1]
        const longtitude = response.body.features[0].center[0]
        console.log(chalk.blueBright.inverse(
            latitude + ' '+ longtitude));
    }
});