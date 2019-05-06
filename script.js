//mouse things
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
);

//Lighter Blue
ctx.fillStyle = "#0abace";
ctx.fillRect(0, 0, 1700, 350);


for (var i = 0; i < 33; i++) {
  ctx.strokeRect(i * 50 + 50, 0, 0, 1000);
}
for (var i = 0; i < 19; i++) {
  ctx.strokeRect(0, i * 50 + 50, 1700, 0);
}

//Upper button
ctx.fillStyle = "#8d929b";
ctx.fillRect(600, 350, 500, 150);

//Lower button
ctx.fillStyle = "#8d929b";
ctx.fillRect(550, 550, 600, 150);

//Discord Thing
//https://discord.gg/7km9wGN/
window.onload = function() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("discord");
  ctx.drawImage(img, 1580, 880, 120, 120);
};


//Waves
//Pew Pew Wave
ctx.fillStyle = "#c6e2ff";
var wave1y = 950;
var wave1x = 0;
ctx.fillRect(wave1x, wave1y, 50, 50);
ctx.fillRect(wave1x, wave1y, 50, 50);
ctx.fillRect(wave1x, wave1y, 50, 50);
ctx.fillRect(wave1x, wave1y, 50, 50);
