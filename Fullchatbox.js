import React from "react";
import "./Fullchatbox.css"

import  { useState } from 'react';
import axios from 'axios';
export default function Navbar() {
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('user-input');
    const [message,setMessage]=useState('');
    const [response,setResponse]=useState('');
    const handleMessageChange=(event)=>{
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
       event.preventDefault();
       displayMessage('User', message, 'user')
       setMessage("")
    //    axios.post('',{message})
    //    .then((res)=>{
    //     console.log("one");
    //     setResponse(res.data.response);
    //     console.log(res.data.response);
    //     displayMessage('Chat Bot',res.data.response,'bot');
    //    })
    //    .catch((error) => {
    //     console.error('Error:', error);
    //   });
    // };
  

const encodedParams = new URLSearchParams();
encodedParams.set('source_language', 'en');
encodedParams.set('target_language', 'id');
encodedParams.set('text', 'I love you');

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'd943bdad50msha8ddbe11d0c993cp10e6b4jsn6730868ed23c',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response =  axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}






    };
    function displayMessage(sender, message, userType) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');

        const image = document.createElement('div');
        image.classList.add(userType + '-image');

        const messageContent = document.createElement('div');
        messageContent.classList.add(userType + '-message');
        var emma = "";
        if (sender == "Chat Bot") {
            emma = "EMMA";
        }
        else {
            emma = "Sourav";
        }
        messageContent.innerHTML = '<strong>' + emma + ':</strong> ' + message;
        //test
        // messageContent.innerHTML = '<strong>' + emma + ':</strong> ' + message;
        if (userType == "user") {
            messageContainer.appendChild(messageContent);
            messageContainer.appendChild(image);
        }
        else {
            messageContainer.appendChild(image);
            messageContainer.appendChild(messageContent);
        }
        chatbox.appendChild(messageContainer);
        // Scroll to the bottom of the chat box
        chatbox.scrollTop = chatbox.scrollHeight;
    }
    return (

        <div class="box2">
            <div class="chat-header">
                <p>Current Chat:</p>
                <div class="buttons">
                    <button id="save-chat-button">Save Chat</button>
                    <button id="clear-chat-button">Clear Chat</button>
                </div>
            </div>
            <div id="chatbox"></div>
            <div id="input-container">
                <input type="text" id="user-input" placeholder="Ask E.M.M.A ..." value={message} onChange={handleMessageChange} />
                <button id="send-button" onClick={handleSubmit}>
                    <i class="fas fa-location-arrow"></i>
                </button>
            </div>
        </div>

    );
}