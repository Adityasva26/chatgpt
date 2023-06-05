const openai = require('openai');
const config = require('./config'); // Path to your config file

// Set up the OpenAI API client
const apiClient = new openai.OpenAIApi(config.apiKey);

// Function to generate a response from ChatGPT
async function generateResponse(prompt) {
  const completion = await apiClient.createCompletion({
    engine: 'text-davinci-003', // Choose an appropriate engine
    prompt: prompt,
    max_tokens: 50, // Adjust as needed
    temperature: 0.6, // Adjust as needed
    n: 1, // Adjust as needed
    stop: '\n', // Stop generating after a newline
  });

  return completion.choices[0].text.trim();
}

// Example usage
async function main() {
  const prompt = 'Hello, ChatGPT!';
  const response = await generateResponse(prompt);
  console.log(response);
}

main().catch(console.error);
