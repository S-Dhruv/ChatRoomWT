const chatContainer = document.getElementById('chat-container');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');// Create WebSocket connection
const socket = new WebSocket(`ws://${window.location.host}`);socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket server');
});
socket.addEventListener('message', (event) => {
    const message = event.data;
    displayMessage(message);
});
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    if (message) {
        socket.send(message);
        messageInput.value = '';
    }
});
function displayMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}