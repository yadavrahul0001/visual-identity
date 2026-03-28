import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  const boxRef = useRef(null);
  const blueContainer = useRef(null);
  const page1Ref = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(boxRef.current, {
        width: "50%",
        duration: 1,
        ease: "power2.inOut",
      });

      tl.to(
        blueContainer.current,
        {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: page1Ref.current,
          start: "top 0%",
          end: "bottom 10%",
          // markers: true,
          scrub: 1,
          pin: true,
        },
      });

      scrollTl
        .to(boxRef.current, {
          scaleX: 2,
          scaleY: 2,
          // transformOrigin: "center center",
          ease: "none",
        })

        .from(contentRef.current, {
          opacity: 0,
          scale: 0.5,
          ease: "none",
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="page1" ref={page1Ref}>
        <div ref={boxRef} className="page1-1">
          <div className="page1-1-blue" ref={blueContainer}></div>
          <div className="page1-1-content" ref={contentRef}>
            <h1>Welcome to My App</h1>
            <p>This is the first page of my awesome app.</p>
          </div>
        </div>
      </div>
      <div className="page1-1-scroll">scroll section</div>
    </>
  );
};

export default Page1;
