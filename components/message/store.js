const chat = [];

function addMessage(message) {
  chat.push(message);
}

function getMessage() {
  return chat;
}

function editMessage() {}

module.exports = {
  add: addMessage,
  list: getMessage,
  //edit
  //delete
};
