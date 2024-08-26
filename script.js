const data = new Date();

function getlocation() {
    return navigator.geolocation.getCurrentPosition(showPosition);

}

function showPosition(position){
    $('#location').html("latitude" + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

function getCurrentTime(){
    const data = new Date();
    return data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
}

function getCurrentDate(){
    const data = new Date();
    return data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear();
}

function getCurrentDay(){
    const days = ["domingo" ,"segunda" , "terça" , "quarta","quinta-","sexta", "sabado"];
    const data = new Date();
    return days[data.getDay()];

}


function timerefresh(){
    $('#hora').text(getCurrentTime());
    $('#date').text(getCurrentDate());
    $('#dia').text(getCurrentDay());
   
}

getlocation();
setInterval('timerefresh()',1000);
console.log(getCurrentTime());
console.log(getCurrentDate());

