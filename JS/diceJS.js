randInt1 = Math.floor(Math.random() *6) +1 ; // 1-6
randInt2 = Math.floor(Math.random() *6) +1 ; // 1-6


if(performance.navigation.type == performance.navigation.TYPE_RELOAD){
    

    document.querySelector(".img1").setAttribute("src" , "Resources/img/dice" +randInt1+".png")
    document.querySelector(".img2").setAttribute("src" , "Resources/img/dice" +randInt2+".png")

    if(randInt1 > randInt2){
        document.querySelector(".container h1").innerHTML = "✨ Player 1 Wins";
    }
    else if(randInt1 < randInt2){
        document.querySelector(".container h1").innerHTML = "Player 2 Wins ✨";
    }
    else{
        document.querySelector(".container h1").innerHTML = "Draw!";
        
    }

}