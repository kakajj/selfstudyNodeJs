// const square = function (x) {
//     return x * x;
// }

// const square = (x) =>{
//     return x*x;
// }

// const square = (x) => x*x ;

const event = {
    name: 'New Year Party',
    guestList: ['JJ','Jane','Aing'],
    printGuestList() {
        console.log('Guest List for '+this.name);
        this.guestList.forEach((guest)=>{
            console.log(guest+ ' is attending '+this.name);
        });
    }
};

event.printGuestList();