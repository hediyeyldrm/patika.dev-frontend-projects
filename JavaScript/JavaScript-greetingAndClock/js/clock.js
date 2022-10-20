let userName = prompt("Adınız nedir?")

let text = document.querySelector("#myName")
text.innerHTML = `${userName}`

let dt = new Date();

let day = dt.getDay();

switch(day){
    case 1:
        day = "Pazartesi";
        break;
    case 2: 
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
    case 7:
        day = "Pazar"
        break;
}

let clock = document.querySelector("#myClock")
clock.innerHTML = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} ${day}`
