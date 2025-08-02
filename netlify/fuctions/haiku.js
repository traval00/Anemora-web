const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: "Write a beautiful original haiku in the tone of ancient myth or arcane fantasy. No title. Three lines only."
      }],
      temperature: 0.7,
      max_tokens: 60
    })
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ haiku: data.choices[0].message.content.trim() })
  };
};
