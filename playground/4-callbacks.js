setTimeout(() => {
    console.log('2 second passed');
}, 2000);

const name = ['JJ', 'Adam'];
const shortName = name.filter((n) => {
    return n.length <= 4
});

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0
        };
        callback(data)
    }, 5000);
};
geoCode('Bangkok', (data) => {
    console.log(data);
});

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {
    setTimeout(() => {
        const num = x + y;
        callback(num)
    }, 2000);
};

add(1, 4, (num) => {
    console.log(num);
});