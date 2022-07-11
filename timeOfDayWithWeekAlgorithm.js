const time = new Date();
var day = time.getDay();
var hour = time.getHours();
var partOfDay = '';
var weekend = false;
if((day === 0)||(day === 7)){
    weekend = true;
}
if(hour > 21){
    partOfDay = 'night';
}
else if(hour > 18){
    partOfDay = 'evening';
}
else if(hour >= 12){
    partOfDay = 'afternoon';
}
else{
    partOfDay = 'morning';
}
if(weekend === true){
    console.log('Today is the weekend.');
}
else{
    console.log('Today is not the weekend.');
}
console.log('The time of day is '+partOfDay+'.');