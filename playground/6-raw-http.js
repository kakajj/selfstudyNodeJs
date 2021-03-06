const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=ad06d583e42ea75dd35231ca63a90baf&query=40,-75`;

const req = http.request(url,(response)=>{

    let data = '';

    response.on('data', (chunk)=>{
        data = data+chunk.toString();
    });

    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body);
    });
});

req.on('error',(error)=>{
    console.log('An error',error);
});

req.end();