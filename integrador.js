alert("Bienvenido al cuestionario de primavera");
nom = prompt("Ingresa tu nombre y apellido :D");

preg1=prompt("¿Cómo se llama el primer día de la primavera?\nA.- Día de la primavera\nB.- Equinoccio de primavera\nC.- El gran día de la primavera");
if (preg1=="B"){    
    preg1=25
}
else{
    preg2=0
}
preg2=prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\n A.- 6 meses de luz diurna ininterrumpida\n B.- 6 meses de oscuridad ininterrumpida\n C.- 6 meses de alternancia de luz y oscuridad");

if(preg2=="A"){
    preg2 = 25;
}else{
    preg2 = 0;
}
preg3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?\n A.- Setiembre\n B.- Junio\n C.- Marzo");

if(preg3=="C"){
    preg3 = 25;
}else{
    preg3 = 0;
} 
preg4 = prompt("¿Qué es la Fiesta de la Primavera en China?\n A.- La Navidad\n B.- El Año Nuevo\n C.- Fiestas Patrias de China");

if(preg4=="B"){
    preg4 = 25;
}else{
    preg4 = 0;
} 

total = preg1 + preg2 + preg3 +preg4;

document.write("<h1>Cuestionario</h1>");
document.write("Estos fueron tus resultados..."+"<br>");
document.write("Estudiante: " + nom + "<br>");
document.write("Obtuviste: " + total + "<br>");
if(total<=25){
    document.write("Lo siento, no pudiste acertar");
}else{
    document.write("Felicidades, eres bienvenido");
}