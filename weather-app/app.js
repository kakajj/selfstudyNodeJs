const request = require('postman-request');
const chalk = require('chalk');
const url = 'http://api.weatherstack.com/current?access_key=ad06d583e42ea75dd35231ca63a90baf&query=37.8267,-122.4233&units=f';

request({url: url, json: true }, (error,response)=>{
    console.log(chalk.greenBright.inverse(
        response.body.current.weather_descriptions+
        '. It is currently '+response.body.current.temperature+ 
        ' faren out. But it\'s feels like '+response.body.current.feelslike+
        ' faren out.'));
});