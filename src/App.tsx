import { useEffect, useRef, useState } from "react";
import "./App.css";
import anime from "animejs";
const tl = anime.timeline({
  easing: "linear",
  duration: 5000,
  // autoplay: false,
  loop: true,
});
function App() {
  const cube = useRef<HTMLDivElement>(null);
  const xv = useRef<HTMLInputElement>(null);
  const yv = useRef<HTMLInputElement>(null);
  const zv = useRef<HTMLInputElement>(null);
  const m1 = useRef(null);
  useEffect(() => {
    // anime({
    //   targets: m1.current,
    //   opacity:0,
    // });
    tl.add({
      targets: cube.current,
      rotateX: "68",
      rotateY: "66",
      rotateZ: "277",
      // duration:3000,
    });
    tl.add(
      {
        targets: m1.current,
        opacity: 1,
        duration: 1500,
        easing: "linear",
        endDelay: 2000,
      },
      "-=500"
    );
    tl.add({
      targets: m1.current,
      opacity: 0,
      duration: 1000,
      easing: "linear",
    });
    tl.add(
      {
        targets: cube.current,
        rotateX: "360",
        rotateY: "360",
        rotateZ: "360",
      },
      "-=1000"
    );
  }, [0]);

  function rotate() {
    // tl.play();
  }

  function rx() {
    console.log("x:", xv.current?.value);
    anime({
      targets: cube.current,
      rotateX: xv.current?.value,
      duration: 0,
    });
  }
  function ry() {
    console.log("y:", yv.current?.value);
    anime({
      targets: cube.current,
      rotateY: yv.current?.value,
      duration: 0,
    });
  }
  function rz() {
    console.log("z:", zv.current?.value);
    anime({
      targets: cube.current,
      rotateZ: zv.current?.value,
      duration: 0,
    });
  }
  return (
    <div
      className="App"
      onClick={() => {
        rotate();
      }}
    >
      {/* <div className="control">
        <input
          type="range"
          min="1"
          max="360"
          // value="50"
          className="slider"
        ref = {xv}
        onChange={()=>{rx()}}
        />
        <input
          type="range"
          min="1"
          max="360"
          // value="50"
          className="slider"
          ref = {yv}
          onChange={()=>{ry()}}
  
        />

        <input
          type="range"
          min="1"
          max="360"
          // value="50"
          className="slider"
          ref = {zv}
          onChange={()=>{rz()}}
        
        />
        </div> */}
      <div className="scene">
        <div className="cube" ref={cube}>
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--back"></div>
          <div className="cube__face cube__face--right"></div>
          <div className="cube__face cube__face--left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              ref={m1}
              opacity="0"
            >
              <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#7dc8cf" />
                <stop offset="100%" stopColor="#5656a1" />
              </linearGradient>
              <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#5656a1" />
                <stop offset="100%" stopColor="#7dc8cf" />
              </linearGradient>
              <linearGradient id="Gradient3" x1="1" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="#5656a1" />
                <stop offset="100%" stopColor="#7dc8cf" />
              </linearGradient>
              <polygon
                className="m2"
                points="9.35 0 9.35 20.52 50 100 90.65 20.52 90.65 0 50 79.48 9.35 0"
                fill="url(#Gradient3)"
              />
              <rect
                className="m1"
                width="9.35"
                height="100"
                fill="url(#Gradient2)"
              />
              <rect
                className="m3"
                x="90.65"
                width="9.35"
                height="100"
                fill="url(#Gradient1)"
              />
            </svg>
          </div>
          {/* <div className="cube__face cube__face--top">top</div> */}
          {/* <div className="cube__face cube__face--bottom">bottom</div> */}
        </div>

    

      </div>
      <div className="title">
          <img src="/title.png" alt="title" width={"400"}/>
        </div>
    </div>
  );
}

export default App;
