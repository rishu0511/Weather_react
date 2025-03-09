import "../../assets/main.css";
import React, { useState } from "react";
import Apps from "./fetch.jsx";
import Canvas from "./tapp.jsx";
import Canvasb from "./box_can.jsx";
import Canvasimg from "./can_img.jsx";
import Canvascimg from "./can_cutimg.jsx";
import Clock from "./clock.jsx";
import CanvasReal from "./real_clock.jsx"
import Canvasr from "./canvas_r.jsx"
export default function App() {
    const [place, setplace] = useState("")
    const [lat,setlat] = useState(0)
    const [lon,setlon] = useState(0)
    const [weath,setweath] = useState(0)
    const [tem_max,setmax] = useState(0)
    const [tem_min,setmin] = useState('')
    const [visible,setvisible] = useState('')
    const [wind,setwind] = useState(0)
    const [gust,setgust] = useState(0)
    const [deg,setdeg] = useState(0)
    const [Air_p,setAirp] = useState(0)
    const [ground_l,setgrnd] = useState(0)
    const [slevel,setslevel] = useState(0)
    const[sunr,setsunrise] = useState(0)
    const[suns,setsunset] = useState(0)
    const [humid,sethumid] = useState(0)
    const [des,setdes] = useState([])
    const [desc,setdesc] = useState('')
    function set_weather(data){
        setplace(data.name)
        const tempe = Object.values(data)[3]
        const myJSON = JSON.stringify(data);
        const weathe = data.weather
        setdes(data.weather)
        data.main ? setweath((data.main.temp-273)) : ''
        data.main ? setmax((data.main.temp_max-273)) : ''
        data.main ? setmin((data.main.temp_min-273)) : ''
        data.main ? setAirp(data.main.pressure): ''
        data.main ? setgrnd(data.main.grnd_level): ''
        data.main ? setslevel(data.main.sea_level): ''
        data.main ? sethumid(data.main.humidity): ''
        data.wind ? setwind(data.wind.speed) : ''
        data.wind ? setgust(data.wind.gust) : ''
        data.wind ? setdeg(data.wind.deg) : ''
        data.sys ? setsunrise(data.sys.sunrise) : ''
        data.sys ? setsunset(data.sys.sunset) : ''
        data.coord? setlat(data.coord.lat):""
        data.coord? setlon(data.coord.lon):""

        data.visibility? setvisible(data.visibility) : ''
        data.weather?data.weather.map((element,index)=>{
            if(index===0){
                setdesc(element.main)
            }
        }):""
        const d = new Date(data.dt*1000);
        const date = d.toUTCString();
        const DDte= String(date);
        const now= new Date(DDte);
        const min = now.getMinutes();
        const hr = now.getHours() % 24;
        console.log(data)
        console.log(hr)
        console.log(min)
    }
    return(
    <div class="canvas">
        <Canvas  DESCRIPT={desc} PLACE={place} TEMP={Math.floor(weath)} DES={desc}/>
        <Apps SETW={set_weather}/>
        <Canvasb class="Box" TEM={tem_min} DES={"Minimum temprature"}/>
        <Canvasb TEM={tem_max} DES={"Maximum temprature"}/>
        <Canvasimg IMG={"./icons/visible.png"} DESC={"Visibility"} VAL={visible} X={50} UNIT= {" meter"}/>
        <Canvasimg IMG={"./icons/air-pressure.png"} DESC={"Air pressure"} VAL={Air_p} X={10}  UNIT= {" Hpa"}/>
        <Canvasimg IMG={"./icons/wind-speed.png"} DESC={"Wind speed"} VAL={wind} X={10}  UNIT= {" m/s"}/>
        <Canvasimg IMG={"./icons/humid.png"} DESC={"Humidity"} VAL={humid} X={10}  UNIT= {" %"}/>
        <Canvasimg IMG={"./icons/groundlevel.png"} DESC={"Ground level"} VAL={ground_l} X={10}  UNIT= {" meter"}/>
        <Canvascimg IMG={"./icons/wind-speed.png"} DESC={"Wind gust"} VAL={gust} X={10} UNIT= {" m/s"}/>
        <Clock NOW={sunr} DES={"Sunrise"} MRDN= {"AM"}/>
        <Clock NOW={suns} DES={"Sunset"} MRDN= {"PM"}/>
        <div class="bottom_box">
            <p class="para">Latitude : {lat}°</p>
            <p class="para">Longitude : {lon}°</p>
            <p class="para">Sea level : {slevel} meter</p>
            <p class="last_p">Wind flowing degree : {deg}°</p>
            <CanvasReal/>
        </div>
    </div>
)}