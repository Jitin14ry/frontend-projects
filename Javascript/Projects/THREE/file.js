document.querySelector('#clock');

const clock = document.querySelector('#clock');

setInterval(function(){
    let date = new Date();
    // const time=console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    
} , 1000)