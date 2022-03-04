canvas = document.getElementById("Canvan");

ctx = canvas.getContext("2d");

var lpx, lpy;
var mouseEvent = "Empty"

color = "blue"
var line_width = 1

var sw = screen.width;

nw = screen.width - 70;
nh = screen.height - 300;

if (sw<992) {
    document.getElementById("Canvan").width=nw;
    document.getElementById("Canvan").height=nh;
}

  canvas.addEventListener("touchstart", touch_s);

  function touch_s (e) {
    lpx=e.touches[0].clientX - canvas.offsetLeft;
    lpy=e.touches[0].clientY - canvas.offsetTop;
 
  }

  canvas.addEventListener("touchmove", touch_m);

  function touch_m (e) {
      cpx=e.touches[0].clientX - canvas.offsetLeft;
      cpy=e.touches[0].clientY - canvas.offsetTop;
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = line_width
    ctx.moveTo(lpx, lpy)
    ctx.lineTo(cpx, cpy);
    ctx.stroke()
    lpx=cpx
    lpy=cpy
  }


  canvas.addEventListener("mousedown", md);
  canvas.addEventListener("mouseup", mo);
  canvas.addEventListener("mouseleave", ml);
  canvas.addEventListener("mousemove", mm);

function md(e) {
  mouseEvent = "mousedown"

  color = document.getElementById("colori").value;
 line_width = document.getElementById("widtha").value;

}


function mo(e) {
  mouseEvent = "mouseup"
  
}



function ml(e) {
  mouseEvent = "mouseleave"
  
}



function mm(e) {
  cpx = e.clientX - canvas.offsetLeft;
  cpy = e.clientY - canvas.offsetLeft;

  if ( mouseEvent == "mousedown") {
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth =  line_width;
   ctx.moveTo(lpx, lpy);
   ctx.lineTo(cpx, cpy);
   ctx.stroke();
  }
  lpx = cpx
  lpy = cpy

}