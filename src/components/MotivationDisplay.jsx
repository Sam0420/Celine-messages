import { useState } from 'react';

const MotivationDisplay = () => {
  const [message, setMessage] = useState("Take a breath. You’re allowed to pause.");

  const generateAIMotivation = async () => {
    setMessage("Thinking...");
    try {
      const res = await fetch('/api/generate');
      const data = await res.json();
      setMessage(`“${data.quote}”`);
    } catch (err) {
      setMessage("Couldn't fetch a new message. Try again later.");
    }
  };

  const showCelinesMessage = async () => {
    try {
      const res = await fetch('https://raw.githubusercontent.com/Sam0420/celine-messages/main/celines-message.json');
      const data = await res.json();
      setMessage(`“${data.message}”`);
    } catch {
      setMessage("Couldn't load today's note. Try again later.");
    }
  };

  return (
    <div className="wrapper">
      <h1 className="title">Celine</h1>
      <p className="subtitle">A moment of calm</p>

      <div className="message-container">
        <p className="message" key={message}>{message}</p>
      </div>

      <div className="buttons">
        <button onClick={generateAIMotivation} className="main-btn">Need a Nudge</button>
        <button onClick={showCelinesMessage} className="main-btn">Daily Note</button>
      </div>
    </div>
  );
};

export default MotivationDisplay;