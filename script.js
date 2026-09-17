let zahl = 5;
let text = "this is not a string "
let booleanwert = true
let text2 = "this might be"
zahl = 6
console.log(zahl);
console.log(zahl-1);
console.log(zahl<=5)
console.log(text);
let newzahl = zahl+5
console.log(newzahl+10/zahl);
console.log(booleanwert)
console.log(text+text2)
console.log("a"<"b")


function funktionsname(zahl,zahl2){
    let result = zahl+zahl2
    return result
}
let zahl3 = 0 ;
zahl3 = funktionsname(5,5);
console.log(zahl3) ;


if (zahl3>=15){
zahl3=15
}
else {
    zahl3-=20
}
console.log(zahl3)

let gleicheZahl = 6; //erste Zahl
let gleicheZahl1 = 5; //zweite Zahl

if (gleicheZahl == gleicheZahl1){
    console.log("gleich")   
}
else{
    if (gleicheZahl>gleicheZahl1){
        console.log(gleicheZahl+" (erste Zahl größer)")
    }
    else{
        console.log(gleicheZahl1+" (zweite Zahl größer)")
    }

}


function evenOrUneven (zahl) {

    if (zahl % 2 ==0 ) {
        console.log("even")
    }
    else {
        console.log("uneven")
    }
   
}
evenOrUneven(4)
let switZahl = 1;
let canBreak;
switch (switZahl) {
    case 1: 
    case 2: canBreak = false
    break
    case 3: canBreak = true
    break
}
console.log("can zombies break doors "+ canBreak)


let dificulty;
let canBreaktenary;
switch (switZahl){
    case 1:dificulty = "easy"
    break
    case 2:dificulty = "medium"
    break
    case 3:dificulty = "hard" 
    break

}
canBreaktenary = (dificulty =="hard") ? "zombie can break the door" : "zombie cant break the door";
console.log(canBreaktenary)
