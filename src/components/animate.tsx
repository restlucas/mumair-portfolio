"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  animationClasses?: string;
}

export const AnimatedElement = ({
  children,
  animationClasses = "",
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const current = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [elementRef]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? animationClasses : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
};
