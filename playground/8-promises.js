const doWOrkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!',undefined)
        callback(undefined,[1,2,3,4])
    }, 2000);
}

doWOrkCallback((error,result)=>{
    if(error){
        return console.log(error)
    }
    console.log(result)
})