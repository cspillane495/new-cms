import { forwardRef, useEffect, useRef, useState } from "react";

function useHover(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let currentRef = null; // <-- variable to hold ref value

    function handleMouseEnter(event) {
      setVisible(true);
    }
    function handleMouseExit(event) {
      setVisible(false);
    }

    if (ref.current) {
      ref.current.addEventListener("mouseenter", handleMouseEnter);
      ref.current.addEventListener("mouseleave", handleMouseExit);
    }
    return () => {
      if (currentRef) {
        ref.current.removeEventListener("mouseenter", handleMouseEnter);
        ref.current.removeEventListener("mouseleave", handleMouseExit);
      }
    };
  }, [ref]);

  return { visible };
}

export default useHover;
