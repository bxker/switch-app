import React from "react";
import io from "socket.io-client";
import './Chat.sass';

function Chat(props) {
  console.log(props.username);
  const [messages, setMessages] = React.useState([]);
  const [userMessage, setUserMessage] = React.useState("");
  const [socket, setSocket] = React.useState(null);
  const [myRef] = React.useState(React.useRef());
  React.useEffect(() => {
    setSocket(io("http://localhost"));
  }, []);

  React.useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  }, [messages])

  if (socket) {
    socket.on(
      "newMessage",
      data => console.log("new messages") || setMessages(data.messages)
    );
  }

  // const autoScroll = () => {
  //   if(message)
  // }

  return (
    <div className="chat-container">
        <ul className="chat-message-ul" ref={myRef}>
          {messages.map(val => (
            <div className="chat-message-cont">
              <li style={{color: `#7DE38D`}}>
                {val.username} :  
              </li>
              <h1>{val.message}</h1>
            </div>
          ))}
        </ul>
      <div className="input-send">
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
    </div>
  );
}

export default Chat;
