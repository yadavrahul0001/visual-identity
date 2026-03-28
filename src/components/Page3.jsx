import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const page3 = React.useRef(null);
  const box1 = React.useRef(null);
  const box2 = React.useRef(null);
  const box3 = React.useRef(null);
  const box4 = React.useRef(null);
  const box5 = React.useRef(null);
  const box6 = React.useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = [
        box2.current,
        box3.current,
        box4.current,
        box5.current,
        box6.current,
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: page3.current,
          start: "top 0%",
          end: "bottom -10%",
          // markers: true,
          scrub: 1,
          pin: true,
        },
      });
      tl.from(boxes, {
        y: "150%",
        duration: 2,
        ease: "linear",
        stagger: 1.9,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="page3" ref={page3}>
        <div className="text-content">
          <h1>Our Achievers</h1>
          <p>
          Ravindra Institute offers a well-structured and result-oriented approach to UPSC preparation. The courses are designed with a strong focus on NCERT-based learning, helping students build clear fundamentals across all subjects. The curriculum is systematically organized, covering both Prelims and Mains in an integrated manner.<br/>



          </p>
        </div>
        <div className="page3-content">
          <div className="box1" ref={box1}>
            <img src="/images/f1.png" alt="Feature 1" />
          </div>
          <div className="box2" ref={box2}>
            <img src="/images/f2.png" alt="Feature 2" />
          </div>
          <div className="box3" ref={box3}>
            <img src="/images/f3.png" alt="Feature 3" />
          </div>
          <div className="box4" ref={box4}>
            <img src="/images/f4.png" alt="Feature 4" />
          </div>
          <div className="box5" ref={box5}>
            <img src="/images/f5.png" alt="Feature 5" />
          </div>
          <div className="box6" ref={box6}>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
