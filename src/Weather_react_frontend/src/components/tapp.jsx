import { useState, useEffect, useRef } from "react";
import React from "react";
const delay = 0.03;
import Canvass from "./Canvas_s.jsx";
import Canvasc from "./canvas_c.jsx";
import Canvasf from "./canvas_f.jsx"
export default function Canvas(props) {
  const [counter, setCounter] = useState(100);
  const timer = useRef(null);
  const [sunny, setsunny] = useState(false);
  const [cloud, setcloud] = useState(false);
  const [fog, setfog] = useState(false);
  // we can save timer in useRef and pass it to child
  useEffect(() => {
    // useRef value stored in .current property
    timer.current = setInterval(() => setCounter((v) => v + 0.2), delay * 1000);

    // clear on component unmount
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  useEffect(() => {
    if (props.DESCRIPT === "Clear") {
      setfog(true);
      setcloud(false);
      setsunny(false);
    } else if (props.DESCRIPT === "Clouds") {
      setcloud(true);
      setfog(false);
      setsunny(false);
    } else if (props.DESCRIPT === "Rain") {
      setcloud(true);
      setfog(false);
      setsunny(false);
    }else {
      setsunny(true);
      setcloud(false);
      setfog(false);
    }
  });

  return (
    <div>
      <Child counter={counter} currentTimer={timer.current} />
      {sunny ? <Canvass COUNT={counter} PLACE={props.PLACE} TEMP ={props.TEMP} DESCRIPT={props.DES}/> : null}
      {cloud ? <Canvasc COUNT={counter} PLACE={props.PLACE} TEMP ={props.TEMP} DESCRIPT={props.DES}/> : null}
      {fog ? <Canvasf COUNT={counter} PLACE={props.PLACE} TEMP ={props.TEMP} DESCRIPT={props.DES}/> : null}
    </div>
  );
}

function Child({ counter, currentTimer }) {
  // this will clearInterval in parent component after counter gets to 5
  useEffect(() => {
    if (counter < 500) return;

    clearInterval(currentTimer);
  }, [counter, currentTimer]);

  return null;
}
