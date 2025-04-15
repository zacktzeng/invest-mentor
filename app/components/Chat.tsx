// Chat.tsx
import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParameters } from "@/contexts/ParametersContext";

const Chat = () => {
  const {
    experienceLevel,
    learningStyle,
    lastUpdated,
    parameterChanged,
    acknowledgeParameterChange
  } = useParameters();

  // This will hold the system message about parameter changes
  const [systemMessage, setSystemMessage] = useState<string | null>(null);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
    body: {
      experienceLevel,
      learningStyle,
      parameterChanged
    },
    onFinish: () => {
      // After the chat completion finishes, acknowledge the parameter change
      if (parameterChanged) {
        acknowledgeParameterChange();
      }
    }
  });

  const chatContainer = useRef<HTMLDivElement>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    console.log("Scrolling to the bottom of the chat");
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Update system message when parameters change
  useEffect(() => {
    if (parameterChanged) {
      console.log("Parameters updated:", { experienceLevel, learningStyle });
      setSystemMessage(`Parameter changes will be acknowledged in the next response.`);
    } else {
      setSystemMessage(null);
    }
  }, [parameterChanged, experienceLevel, learningStyle]);

  useEffect(() => {
    scroll();
  }, [messages]);

  // Create a custom submit handler that wraps the original
  const handleCustomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
  };

  const renderResponse = () => {
    return (
      <div className="response">
        {systemMessage && (
          <div className="system-message text-xs text-gray-500 italic mb-2">
            {systemMessage}
          </div>
        )}
        {messages.map((m, index) => (
          <div
            key={m.id}
            className={`chat-line ${m.role === "user" ? "user-chat" : "ai-chat"
              }`}
          >
            <Image
              className="avatar"
              alt="avatar"
              width={40}
              height={40}
              src={m.role === "user" ? "/user-avatar.jpg" : "/ai-avatar.png"}
            />
            <div style={{ width: "100%", marginLeft: "16px" }}>
              <p className="message">{m.content}</p>
              {index < messages.length - 1 && (
                <div className="horizontal-line" />
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>
        ))}
      </div>

    );
  };

  return (
    <div ref={chatContainer} className="chat w-full">
      {renderResponse()}
      <form onSubmit={handleCustomSubmit} className="chat-form">
        <input
          name="input-field"
          type="text"
          placeholder="Ask about investing..."
          onChange={handleInputChange}
          value={input}
        />
        <button type="submit" className="send-button" />
      </form>

    </div>
  );
};

export default Chat;