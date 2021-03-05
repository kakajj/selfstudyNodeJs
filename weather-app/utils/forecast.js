// Load package ที่เราใช้ก่อน
const request = require("postman-request");

// สร้างฟังก์ชั่นที่สมบูรณ์แบบ
const forecast = (lati,longti,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=ad06d583e42ea75dd35231ca63a90baf&query=${lati},${longti}`;
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather service',undefined);
        }else if(response.body.error){
            callback('Unable to find location',undefined);
        }else{
            callback(undefined,{
                location: response.body.location.region,
                weather : response.body.current.weather_descriptions,
                currentTem: response.body.current.temperature,
                feelslike : response.body.current.feelslike
            });
        };
    })
}
// Export ฟังก์ชั่นออกไปให้ file อื่น request
module.exports = forecast;

