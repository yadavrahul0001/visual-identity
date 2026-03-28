import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isHovering = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    // Smooth ring follow using RAF
    const animateRing = () => {
      const speed = 0.15;
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    };

    // Hover detection for interactive elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("courseButton") ||
        target.classList.contains("slider-btn") ||
        target.classList.contains("dot")
      ) {
        if (!isHovering) {
          isHovering = true;
          ring.classList.add("cursor-hover");
          dot.classList.add("cursor-dot-hover");
        }
      }
    };

    const onMouseOut = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("courseButton") ||
        target.classList.contains("slider-btn") ||
        target.classList.contains("dot")
      ) {
        isHovering = false;
        ring.classList.remove("cursor-hover");
        dot.classList.remove("cursor-dot-hover");
      }
    };

    const onMouseDown = () => {
      ring.classList.add("cursor-click");
      dot.classList.add("cursor-dot-click");
    };

    const onMouseUp = () => {
      ring.classList.remove("cursor-click");
      dot.classList.remove("cursor-dot-click");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    animateRing();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" ref={dotRef} />
      <div className="custom-cursor-ring" ref={ringRef} />
    </>
  );
};

export default CustomCursor;
