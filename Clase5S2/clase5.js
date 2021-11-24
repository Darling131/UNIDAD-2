/* for (var i=0; i<10; i++){
    alert(i)
} 
*/

/*
let text ="";
for(let i=0; i<10; i++);{
    text += i+ "<br>";
}
document.getElementById("demo").innerHTML=text;
*/

const colores= ["Yellow","Blue","White","Black","Green","Pink"]
let text=""; 
for (let i=0; i<colores.length; i++){
    text +=colores[i] + "<br>"
}
document.getElementById("demo").innerHTML=text;

