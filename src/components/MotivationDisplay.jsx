import { useState } from 'react';

const MotivationDisplay = () => {
    const [message, setMessage] = useState("Take a breath. You’re allowed to pause.");

    const generateAIMotivation = () => {
        const reflections = [
            "You don’t have to be productive to be valuable.",
            "Quiet days still count. Healing is invisible work.",
            "You’re not falling behind — you’re moving differently.",
            "Uncertainty isn’t failure. It’s space to become.",
            "Even when it’s not loud, you’re still growing.",
            "You can exist gently. That’s enough.",
            "Rest is also a way of moving forward.",
            "You're doing better than it feels right now.",
        ];
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
        <div className="wrapper">
            <h1 className="title">Celine</h1>
            <div className="message-container">
                <p className="message" key={message}>{message}</p>
            </div>
            <div className="buttons">
                <button onClick={generateAIMotivation} className="main-btn">Need a Nudge</button>
                <button onClick={showCelinesMessage} className="main-btn">Sam's Daily</button>
            </div>
        </div>
    );
};

export default MotivationDisplay;