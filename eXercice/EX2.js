let nombreSecret = Math.floor(Math.random()*10)+ 1;
let tentative = 0;
let trouve = false;

while(! trouve){
    
    let proposition = Number(prompt("saisir un nombre entre 1 et 10:"));
    tentative++;

    if(proposition < nombreSecret){
        alert("plus petit !");
    } else if(proposition > nombreSecret){
        alert("plus grand !");
    } else {
        trouve = true;
        alert("Bravo ! vous avez trouvé en " +tentative + "tentetive(§) !")
        console.log("Score(nombre de tentative):", tentatives);
    }
}
