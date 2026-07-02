"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 800,
  threshold = 0.1
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after it reveals so it doesn't trigger repeatedly
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it enters full viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const directionClasses = {
    up: "reveal-up",
    down: "reveal-down",
    left: "reveal-left",
    right: "reveal-right",
    fade: "reveal-fade"
  };

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`
  };

  return (
    <div 
      ref={ref} 
      className={`reveal-base ${directionClasses[direction]} ${isVisible ? "revealed" : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
