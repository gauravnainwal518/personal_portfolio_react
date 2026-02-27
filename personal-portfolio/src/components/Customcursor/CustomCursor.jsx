import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      followerRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const addHoverEffect = () => {
      followerRef.current.classList.add("cursor-hover");
    };

    const removeHoverEffect = () => {
      followerRef.current.classList.remove("cursor-hover");
    };

    const hoverElements = document.querySelectorAll("a, button");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={cursorRef}></div>
      <div className="cursor-ring" ref={followerRef}></div>
    </>
  );
};

export default CustomCursor;
