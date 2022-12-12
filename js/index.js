

const date = new Date();
var hour = date.getHours();
var mins = date.getMinutes();
var sec = date.getSeconds();


document.getElementById('hours').innerHTML = hour;
 document.getElementById('min').innerHTML = mins;
 document.getElementById('sec').innerHTML = sec;
 

 if(hour>=12){
    document.getElementById('attr').innerHTML = ('PM');
 }else{
    document.getElementById('attr').innerHTML = ('AM');
 }





