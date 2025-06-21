// src/components/MotivationDisplay.jsx
import { useEffect } from "react";
import confetti from "canvas-confetti";

const MotivationDisplay = () => {
  useEffect(() => {
    // Fire confetti burst when component loads
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });

    // Continue a light confetti drizzle every second
    const interval = setInterval(() => {
      confetti({
        particleCount: 25,
        spread: 70,
        origin: { x: Math.random(), y: Math.random() - 0.2 }
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="celebration-container">
      <h1 className="celebration-text">You did it! 🎉</h1>
    </div>
  );
};

export default MotivationDisplay;