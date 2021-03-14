// Load package ที่เราใช้ก่อน
const request = require('postman-request');

// สร้างฟังก์ชั่นที่สมบูรณ์แบบ
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) +
        '.json?access_token=pk.eyJ1Ijoia2FrYWpqIiwiYSI6ImNrbHJzejVqeTAzcGkyb252Yjl0eDY0d3QifQ.Lyv-UpiUTXT86yJ9yO0AQA&limit=1';
    
    request({url: url, json: true}, (error, {body}={}) => {
        if (error) {
            callback('Unable to connect to location services..', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find locaion,try another search..', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
            });
        };
    });
};

// Export ฟังก์ชั่นออกไปให้ file อื่น request
module.exports = geoCode ;