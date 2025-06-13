// src/components/MotivationDisplay.jsx
import { useState } from 'react';


const MotivationDisplay = () => {
  const [message, setMessage] = useState("Take a breath. You’re allowed to pause.");

  const reflections = [
    "You don’t have to rush — you’re allowed to move slowly.",
    "Quiet is not empty. It’s space to hear yourself.",
    "You can exhale now. It’s safe to soften.",
    "Not everything blooms at the same pace — and that’s okay.",
    "Healing isn’t linear. It’s real even when it loops.",
    "You’ve done harder things than this. You’ll do this too.",
    "A cup of tea and a deep breath can be medicine too.",
    "Gentle progress is still progress.",
    "You’re already further than you were yesterday.",
    "The sun doesn’t ask permission to shine — and neither should you.",
    "You’re allowed to be a work in progress.",
    "Some days growth looks like rest.",
    "You are growing in quiet ways no one sees yet.",
    "Give yourself time to unfold.",
    "Even when you're unsure, you’re still evolving.",
    "Slowness doesn’t mean stuckness.",
    "Softness is a form of strength.",
    "You don’t have to see the whole path — just the next step.",
    "The fog will lift. It always does.",
    "You’re allowed to try again tomorrow.",
    "This moment isn’t the end — it’s a bend.",
    "You haven’t missed anything meant for you.",
    "Forward doesn’t always look dramatic. Sometimes it tiptoes.",
    "You’re still in the story. Keep turning the page.",
    "Nothing about you needs fixing — just gentle care.",
    "It’s okay to begin again. And again.",
    "You smiled at someone today. That matters.",
    "You’re allowed to have quiet joy.",
    "Your presence is a gift — even on soft days.",
    "Even small kindnesses echo far.",
    "You noticing the sky today counts as magic.",
    "You being here is enough of a miracle for now.",
    "A gentle heart is a powerful thing.",
    "Let softness win today.",
    "There is sweetness in small steps."
  ];

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

 