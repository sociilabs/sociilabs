"use client";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import QuoteModal from "@/app/components/modal";
import Link from "next/link";

export default function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  // useEffect(() => {
  //   document.addEventListener('mousemove', (e) => {
  //     const square = document.querySelector('.square');
  //     square.style.transform = `translate(${e.clientX - 25}px, ${e.clientY - 25}px)`;
  //   });
  // }, []);

  const toggleModal = () => {
    // setShowQuoteModal(!showQuoteModal);
    window.location.href = 'https://form.typeform.com/to/uRoAeanX';
  }

  return (
    <>
      {showQuoteModal && <QuoteModal toggleModal={toggleModal} />}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
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
            full service<br/>
            design & development<br/>
            studio
          </h1>
        </div>
        <div className={`footer`}>
          <ul>
            <li>
              <Link href={"https://www.linkedin.com/company/sociilabs"} target={"_blank"}>
                LinkedIn
              </Link>
            </li>
            <li>
              <button className={`px-6 py-2 bg-gray-700 border-2 rounded-full`} onClick={toggleModal}>Get a Quote</button>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
