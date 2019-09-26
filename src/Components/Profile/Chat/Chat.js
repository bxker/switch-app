import React from "react";
import io from "socket.io-client";
import './Chat.sass';
import EmojiPicker from 'emoji-picker-react'

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
              {val.user ? 
                  <li style={{color: `#7DE38D`}}>
                    {val.username} :  
                  </li>
                :
                  <li style={{color: `#7DE38D`}}>
                    <h1>guestuser{Math.floor(Math.random() * 10000) + 8} :</h1> 
                  </li>
                }
              <h1>{val.message}</h1>
            </div>
          ))}
        </ul>
      <form className="input-send">
        <input onChange={e => setUserMessage(e.target.value)} />
        {/* <EmojiPicker onEmojiClick={}/> */}
        <button
          onClick={(e) => {
            e.preventDefault()
            socket.emit("messageSend", {
              message: userMessage,
              username: props.username,
              profile: props.profile
            });
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Chat;
