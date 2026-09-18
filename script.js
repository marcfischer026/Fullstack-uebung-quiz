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
    default : dificulty = "not 1-3"
    break
}
canBreaktenary = (dificulty =="hard") ? "zombie can break the door" : "zombie cant break the door";
console.log(canBreaktenary)


for (let i = 0; i < 5; i++){
    console.log(i)
}
let zahl2 = 2;
while (zahl2<10){
    zahl2 =zahl2 * 2;
    console.log(zahl2)
}

let visitors = [1,2,3,4,5]

for (let i = 0; i<11;i++){
    console.log(i)
}

function powercalculation (a,b){
    let result = a;
    while (b>1) {
        result = result * a
        b--
    }
    return result
}
console.log(powercalculation(2,7))
let a = 2; //base
let b = 9; //power
let atothepowerofb;
atothepowerofb = a;
while (b>1) {
    atothepowerofb = atothepowerofb * a;
    b--;

}
console.log(atothepowerofb)
