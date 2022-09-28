function getRandomInt(max){
    return Math.floor(Math.random()* max)
}

const bot = getRandomInt(3)






function player(){ /*inciio jugador*/ 
    var jugador = document.getElementById("jugadorNum").value;
    console.log ( jugador)
     if ( jugador == 2){
        if(bot == 0 ){
            alert("Ganaste , Elejiste papel y el piedra")
        }
        if(bot == 1){
            alert("Es un empate , Ambos eligieron papel")
        }
        if(bot == 2){
            alert("Perdiste, Tu elejiste papel y el tijera ")
        }
     }
     if (jugador == 1){
        if(bot == 0){
            alert("Ganaste , Elejiste piedra y el tijera")
        }
        if(bot == 2){
            alert("Es un empate , Ambos eligieron piedra")
        }
        if(bot == 1){
            alert("Perdiste , elegiste piedra y el papel")
        }
     }
     if(jugador == 3){ 
        if(bot == 1){
            alert("Perdiste, elejiste tijera y el piedra")
        }
        if(bot == 2){
            alert("Ganaste, Elejiste tijera y el papel")
        }
        if(bot == 0){
            alert("Es un empate , Ambos eligieron piedra")
        }
        
     }

    if(jugador > 3){
        alert("Has elegido el camino del mal")
        alert("Hiciste llorar a chayanne , espero que estes feliz :(")
        const myImage = new Image(400, 200);
        myImage.src = 'chayane_sad.jpg';
        document.body.appendChild(myImage);
    
    }
    if(jugador < 1){
        alert("Tienes cancer andy")
        const myImage = new Image(500, 500);
  myImage.src = 'nmms.jpg';
  document.body.appendChild(myImage);
    }
    }