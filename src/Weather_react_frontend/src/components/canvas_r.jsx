import React from "react"
import { useRef, useEffect, useState } from "react";
export default function Canvasr(props) {
  const canvasRef = useRef()
  const [width,setwidth] = useState(0)
  useEffect(()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = window.innerWidth;
    setwidth(width);
    function clock() {
        const ctx = canvas.getContext("2d");
        ctx.save()
        const now = new Date();
        const milisec = now.getMilliseconds()
        const sec = now.getSeconds()
        const snow = new Date();
        const smili = snow.getMilliseconds()
        const len = 0
        const len1= 0
        var r = sec % 2 == 0 ? len : len +1;
        var r1 = sec % 3 == 0 ? len1 : len1 +1;
        ctx.save()
        ctx.clearRect(0, 0, 1450, 600);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.fillStyle ="white"
        ctx.fill()
        ctx.strokeStyle="white";
        ctx.restore()
        ctx.save()
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(1000-milisec/3,-30+milisec/3,2,0,2 * Math.PI);
        ctx.closePath()
        
        ctx.arc(800-milisec/2,30+milisec/2,2,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc(900-milisec/4-r*250,-30+milisec/4+r*250,2,0,2 * Math.PI);
        ctx.closePath()
        
        ctx.arc((400- smili/5)-r*200,(50+milisec/5)+r*200,2,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc((500- smili/2),(-50+milisec/1),2,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc((1200- smili/1),(10+milisec/2),2,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc(1300-milisec/2,10+milisec/2,2,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc((400- smili/3),(20+milisec/2),2.5,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc((1250- smili/1),(10+milisec/3),2.5,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc(1350-milisec/2,40+milisec/2,2,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc((1400- smili/1),(10+milisec/3),2,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc(1020-milisec/2-r1*500,20+milisec/2+r1*500,2,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc((150- smili/1),(-10+milisec/3),2.5,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc(1250-milisec/2-r*500,-60+milisec/2+r*500,2,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc((400- smili/1),(40+milisec/3),2.5,0,2 * Math.PI);
        ctx.closePath()
        ctx.arc(120-milisec/2-r1*500,20+milisec/2+r1*500,2.5,0,2 * Math.PI);
        ctx.closePath()
        ctx.restore()
        ctx.save()
        context.font = "50px Arial";
        ctx.fillStyle = "skyblue";
        ctx.fillText(props.PLACE,900,80);
        ctx.fillText(props.TEMP+" °C",900,500);
        ctx.fillText(props.DESCRIPT,200,500);
        ctx.restore()
         // Minute marks
        window.requestAnimationFrame(clock);
      } 
      window.requestAnimationFrame(clock);
  },[canvasRef])
  return <canvas ref={canvasRef} width={width-16} height={600} />;
}