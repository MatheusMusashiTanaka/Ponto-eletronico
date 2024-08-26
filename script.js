//constante que recebe data do pc
const data = new Date();


//procura localizacao, caso ache ele roda o showposition
function getlocation() {
    return navigator.geolocation.getCurrentPosition(showPosition);

}


//mostra posiçao e pais
function showPosition(position){
    $('#location').html("latitude" + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    $.getJSON(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`, function(data) {
        const Pais = data.address.country;
        $('#pais').text('Pais: ' + Pais);
        window.paisatual = Pais;
})
}


//recebe tempo atual
function getCurrentTime(){
    const data = new Date();
    return data.getHours().toString().padStart(2,'0') + ":" //hora
    + data.getMinutes().toString().padStart(2,'0') + ":" //minuto
    + data.getSeconds().toString().padStart(2,'0'); //segundos
}


//data atual (qualquer pais menos estados unidos)
function getCurrentDate(){
    const data = new Date();
    return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
}


//data caso estados unidos
function getCurrentDateEUA(){
    const data = new Date();
    return  (data.getMonth() + 1) + "/" + data.getDate() + "/" + data.getFullYear();
}


//dia da semana
function getCurrentDay(){
    const days = ["domingo" ,"segunda" , "terça" , "quarta", "quinta" ,"sexta", "sabado"];
    const data = new Date();
    return days[data.getDay()];

}

getlocation();


// Função que vai ficar Constantemente atualizando
function timerefresh(){
    
    //printa a hora
    $('#hora').text(getCurrentTime());
    

    //printa a data dependendo da formatacao da reguai
    if (window.paisatual === "United States"){
        $('#date').text(getCurrentDateEUA());
    } else {
        $('#date').text(getCurrentDate());
    }
    
    // recebe o dia da semana
    $('#dia').text(getCurrentDay());
   
}

//atualiza a funcao timerefresh a cada 1000 ms
setInterval('timerefresh()',1000);


//printa no console o tempo e a data atual
console.log(getCurrentTime());
console.log(getCurrentDate());

