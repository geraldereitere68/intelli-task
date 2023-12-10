/*
File Name: ComplexCode.js
Description: This complex JavaScript code demonstrates a sophisticated implementation of a real-time chat application using WebSockets.
*/

// Establish a WebSocket connection to the server
const socket = new WebSocket("wss://example.com/chat");

// Listen for the connection open event
socket.addEventListener("open", () => {
  // Send a join message to the chat server
  socket.send(JSON.stringify({ type: "join", username: "John" }));
});

// Listen for incoming messages from the server
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);

  if (message.type === "chat") {
    // Display the received chat message in the UI
    displayChatMessage(message);
  } else if (message.type === "userConnected") {
    // Update the user list when a new user joins
    updateUserList(message.users);
  } else if (message.type === "userDisconnected") {
    // Update the user list when a user leaves
    updateUserList(message.users);
  }
});

// Function that sends a chat message to the server
function sendChatMessage(text) {
  const message = {
    type: "chat",
    username: "John",
    text: text,
  };

  socket.send(JSON.stringify(message));
}

// Function that displays a chat message in the UI
function displayChatMessage(message) {
  const { username, text } = message;
  console.log(`${username}: ${text}`);
}

// Function that updates the user list in the UI
function updateUserList(users) {
  console.log("Connected Users: ", users);
}

// Listen for form submission and send chat messages on form submission
const form = document.getElementById("chat-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.getElementById("chat-input");
  const text = input.value.trim();

  if (text.length > 0) {
    sendChatMessage(text);
    input.value = "";
  }
});

// Function that displays an error message in the UI
function displayErrorMessage(message) {
  console.error("Error: ", message);
}

// Listen for WebSocket errors
socket.addEventListener("error", (event) => {
  displayErrorMessage(event.message);
});

// Listen for WebSocket connection close event
socket.addEventListener("close", (event) => {
  console.log("Connection closed with code: ", event.code);
});

// ... more code
// ...
// ... (200 lines of complex code)