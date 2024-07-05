"use client";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  // useEffect(() => {
  //   document.addEventListener('mousemove', (e) => {
  //     const square = document.querySelector('.square');
  //     square.style.transform = `translate(${e.clientX - 25}px, ${e.clientY - 25}px)`;
  //   });
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
      />
      <div className={`blooming-sun`}>
        <div className={`full-circle`}>
          360&deg;
        </div>
      </div>
      <div className={`content-container`}>
        <h1>
          full service<br />
          design & development<br />
          studio
        </h1>
      </div>
    </main>
  );
}
