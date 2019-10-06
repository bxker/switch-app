import React from "react";
import io from "socket.io-client";
import './Chat.sass';
// import EmojiPicker from 'emoji-picker-react';
// import utf8 from 'utf8';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'


function Chat(props) {
  const [messages, setMessages] = React.useState([]);
  const [userMessage, setUserMessage] = React.useState("");
  const [socket, setSocket] = React.useState(null);
  const [myRef] = React.useState(React.useRef());
  //state for handling emojis
  const [emojiSwitch, setEmojiSwitch] = React.useState(false);


  React.useEffect(() => {
    setSocket(io());
  }, []);

  React.useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  }, [messages])
    
  if (socket) {
    socket.on(
      "newMessage",
      data => updateData(data)
    );
  }

  const updateData = data => {
    if(props.profile === data.profile){
      setMessages(data.messages)
    }
  }

  const handleEmojiSwitch = () => {
    setEmojiSwitch(true)
  }
  const handleEmojiSwitchFalse = () => {
    setEmojiSwitch(false)
  }

  const handleEmoji = (e) => {
    let emoji = e.native;
    setUserMessage(userMessage + emoji)
  }

  return (
    <div className="chat-container">
        <ul className="chat-message-ul" ref={myRef}>
          {messages.map(val => (
            <div className="chat-message-cont">
              {props.username ? 
                  <li style={{color: `#7DE38D`}}>
                    {val.username} :  
                  </li>
                :
                  <li style={{color: `#7DE38D`}}>
                    <h1>guestuser{Math.floor(Math.random() * 10000) + 8} :</h1> 
                  </li>
                }
              <h1><span>{val.message}</span></h1>
            </div>
          ))}
        </ul>
      <form className="input-send">
        <input placeholder={"Enter message"} value={'' || `${userMessage}`} onChange={e => setUserMessage(e.target.value)} />
        {!emojiSwitch ?
          <span className="emoji-picker" style={{cursor: 'pointer'}} onClick={handleEmojiSwitch}>&#128512;</span>
          :
            <Picker style={{position: 'absolute', bottom: '220px', right: '150px'}} onSelect={(e) => {
              handleEmoji(e)
              handleEmojiSwitchFalse()
            }}/>
          }
        <button
          className="send-message"
          onClick={(e) => {
            e.preventDefault()
            socket.emit("messageSend", {
              message: userMessage,
              username: props.username,
              profile: props.profile
            });
          }}
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default Chat;
