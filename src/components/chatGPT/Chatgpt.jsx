import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import './chatgpt.css'
import { useNavigate } from "react-router-dom";
import logoCocktails from "../../static/logoCocktails.png"
import avatar from "../../static/avatar.png"

const IndexPage = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [log, setLog] = useState([]);
  const [messages, setMessages] = useState([]);

  const navigate = useNavigate();

  // const OpenAI_API_KEY = "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";

  const completionCall = async (input) => {
    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY || "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",
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: updatedMessages,
    });

    const message = completion.data.choices[0].message;
    const updatedLog = [{ input, response: message.content }, ...log];
    setLog(updatedLog);
    setResponse(message.content);
    console.log(message.content);
  };

  const generateResponse = async (e) => {
    e.preventDefault();
    await completionCall(input);
    console.log(input);
    setInput("");
  };

  return (
    <div className="main-chat">
      <button className="button-test-list" onClick={()  => navigate('/cocktails-list')}>
        <span>Go back</span>
      </button>
      <form className="form-chat" onSubmit={generateResponse}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="How can I help you?"
          style={{ width: "95%" }}
        />
        <button className="button-explore" type="submit">Submit</button>
      </form>
      <div className="chatLog">
        {log.map((item, index) => (
          <div key={index} className="chat-body">
            <div>
              <div className="text-user">
                <div>
                  <img src={avatar} alt="" className="img-avatar-chat"/>
                </div>
                  <div className="text-chat-response-input">
                    {item.input}
                  </div>
                </div>
            </div>
            <div>
              <div className="text-chat">
                <div>
                  <img src={logoCocktails} alt="" className="img-logoCocktails-chat"/>
                </div>
                <div className="text-chat-response">
                  {item.response}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;