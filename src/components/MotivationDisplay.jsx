// src/components/MotivationDisplay.jsx
import { useState } from 'react';


const MotivationDisplay = () => {
  const [message, setMessage] = useState("Take a breath. You’re allowed to pause.");

  const reflections = [
  "Rest isn’t laziness — it’s part of the journey.",
  "You’re allowed to pause before rising again.",
  "Even when you’re quiet, you are still full of meaning.",
  "The moon doesn’t shine all day — and neither do you need to.",
  "You don’t owe the world a smile every day. Just your truth.",
  "The smallest step forward still moves you closer.",
  "Being tender with yourself is a kind of wisdom.",
  "Today’s peace matters more than yesterday’s pressure.",
  "You’re allowed to feel messy and still be loved.",
  "You’re not behind — you’re on your own timeline.",
  "Being doesn’t always mean doing.",
  "The way you keep going — even quietly — is a form of bravery.",
  "You don’t need to glow to still be light.",
  "Grace looks good on you — even when you don’t see it.",
  "You’re not broken. You’re just becoming.",
  "Even a deep breath is a step forward.",
  "You don’t need a reason to rest.",
  "Be gentle with yourself — you’re doing the best you can.",
  "You are allowed to hold both joy and sorrow in the same hands.",
  "Not feeling okay is still a part of healing.",
  "You’re allowed to grow at your own rhythm.",
  "Your softness is not a flaw — it’s a language of strength.",
  "You’re not late. Your moment is still unfolding.",
  "There’s nothing wrong with needing time.",
  "You can carry uncertainty and hope at the same time."
]
  const generateAIMotivation = () => {
    const random = reflections[Math.floor(Math.random() * reflections.length)];
    setMessage(`“${random}”`);
  };

  const showCelinesMessage = async () => {
    try {
      const res = await fetch('/celines-message.json');
      const data = await res.json();
      setMessage(`“${data.message}”`);
    } catch {
      setMessage("Couldn't load today's note. Try again later.");
    }
  };

 return (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <div className="clouds">
      <svg className="cloud" viewBox="0 0 64 64">
        <path d="M20 50h24a12 12 0 0 0 0-24 16 16 0 0 0-31-4A10 10 0 0 0 20 50z" fill="#fff" opacity="0.6"/>
      </svg>
      <svg className="cloud" viewBox="0 0 64 64">
        <path d="M20 50h24a12 12 0 0 0 0-24 16 16 0 0 0-31-4A10 10 0 0 0 20 50z" fill="#fff" opacity="0.5"/>
      </svg>
      <svg className="cloud" viewBox="0 0 64 64">
        <path d="M20 50h24a12 12 0 0 0 0-24 16 16 0 0 0-31-4A10 10 0 0 0 20 50z" fill="#fff" opacity="0.4"/>
      </svg>
      <svg className="cloud" viewBox="0 0 64 64">
        <path d="M20 50h24a12 12 0 0 0 0-24 16 16 0 0 0-31-4A10 10 0 0 0 20 50z" fill="#fff" opacity="0.5"/>
      </svg>
      <svg className="cloud" viewBox="0 0 64 64">
        <path d="M20 50h24a12 12 0 0 0 0-24 16 16 0 0 0-31-4A10 10 0 0 0 20 50z" fill="#fff" opacity="0.6"/>
      </svg>
    </div>

    <div className="wrapper">
      <h1 className="title">Celine</h1>

      <div className="message-container">
        <p className="message" key={message}>{message}</p>
      </div>

      <div className="buttons">
        <button onClick={generateAIMotivation} className="main-btn">
          Need a Nudge
        </button>
        <button onClick={showCelinesMessage} className="main-btn">
          Sam's Daily Note
        </button>
      </div>
    </div>
  </div>
);
}
export default MotivationDisplay; 

 