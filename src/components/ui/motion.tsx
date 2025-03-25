
import React, { useEffect, useRef, useState } from "react";

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  animation: string;
  delay?: string;
  threshold?: number;
  once?: boolean;
}

export function Motion({
  children,
  className = "",
  animation,
  delay = "",
  threshold = 0.1,
  once = true,
}: MotionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
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
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate-${animation} ${delay}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
