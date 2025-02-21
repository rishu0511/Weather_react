import React from "react"
import { useRef, useEffect, useState } from "react";
export default function Canvascimg(props) {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context,props.IMG)

    context.font = "15px Arial";
    context.fillStyle = "black";
    context.fillText(props.DESC+": " + props.VAL +props.UNIT, 65, 215);
  });
  function draw(ctx,img_src) {
    ctx.clearRect(0, 0, 250, 250);
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 200, 180, 150, 10, 10, 200, 180);
    };
    img.src = img_src;
  }
  
  return <canvas ref={canvasRef} width={270} height={250} />;
}
