import React from "react";
import io from "socket.io-client";
import './Chat.sass';
// import EmojiPicker from 'emoji-picker-react';
// import utf8 from 'utf8';
import {Picker} from 'emoji-mart';


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
    console.log(e)
    let emoji = e.native;
    setUserMessage(userMessage + emoji)
  }

console.log(userMessage)

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
        <span className="emoji-picker">
        {!emojiSwitch ?
          <span style={{cursor: 'pointer'}} onClick={handleEmojiSwitch}>&#128512;</span>
          :
            <Picker style={{backgroundColor: 'white', height: '250px', width: '300px', overflow: 'scroll', position: 'absolute', bottom: '160px', right: '2%'}} onSelect={(e) => {
              handleEmoji(e)
              handleEmojiSwitchFalse()
            }}/>
          }
          </span>
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
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Chat;
