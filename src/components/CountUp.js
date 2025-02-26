import React, { useEffect, useState, useRef } from "react";

function CountUp({ endValue, duration = 2 }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startValue = 0;
    let startTime = null;
    const end = parseInt(endValue, 10);
    if (isNaN(end)) return;
    const totalDuration = duration * 1000;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      const current = Math.floor(progress * (end - startValue) + startValue);
      setCurrentValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  }, [hasStarted, endValue, duration]);

  return <span ref={ref}>{currentValue}</span>;
}

export default CountUp;
