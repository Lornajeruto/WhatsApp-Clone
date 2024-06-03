import React, {useState, useEffect, useRef } from "react";
import "./App.css";
function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);
  useEffect(() => {
    ws.current = new webSocket("ws://loalhost:8080/ws");
    ws.current.onmessage = (event) => {
      setMessages(prevMessages =>[...prevMessages, event.data]);
  };
  return () => {
    ws.current.close();
  };
  }, []);
  const sendMessage = () => {
    ws.current.send(input);
    setInput("");
  };
  return (
    <div className="app">
      <div className="chat-window">
        <ul className="messages">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
  ))}
  </ul>
  <div className="input-container">
    <input
    type="text"
    value={input}
    onChange={(e) =>setIput(e.target.value)}
    placeholder="Type a message..."
    />
    <button oClick={sendMessage}>send</button>
    </div>
    </div>
    </div>
    );
  }
  export default App;
  