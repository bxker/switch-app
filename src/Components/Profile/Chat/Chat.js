import React from "react";
import io from "socket.io-client";

function Chat(props) {
  console.log(props.username);
  const [messages, setMessages] = React.useState([]);
  const [userMessage, setUserMessage] = React.useState("");
  const [socket, setSocket] = React.useState(null);
  React.useEffect(() => {
    setSocket(io("http://localhost"));
  }, []);

  if (socket) {
    socket.on(
      "newMessage",
      data => console.log("new messages") || setMessages(data.messages)
    );
  }

  return (
    <div className="App">
      <ul>
        
        {messages.map(val => (
          <li>
           {val.username} :{val.message}
          </li>
        ))}
      </ul>
      <input onChange={e => setUserMessage(e.target.value)} />
      <button
        onClick={() => {
          socket.emit("messageSend", {
            message: userMessage,
            username: props.username,
            profile: props.profile
          });
        }}
      >
        Send Message
      </button>
    </div>
  );
}

export default Chat;
