console.log("Hi load...");

// fetch('http://localhost:3000/weather?address=Thailand').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error);
//         }else{
//             console.log(data.location);
//             console.log(data.forecast);
//         }
//     })
// })

const form = document.querySelector('form')
const input = document.querySelector('input');
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = 'http://localhost:3000/weather?address=' + input.value;
    msg1.textContent = 'loading....';
    msg2.textContent = '';
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error;
            } else {
                msg1.textContent = data.location;
                msg2.textContent = data.forecast;
            }
        })
    })
});