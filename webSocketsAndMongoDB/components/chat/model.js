const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  name: String,
  users: [
    {
      type: Schema.ObjectId,
      ref: 'User',
    },
  ],
});

const chatModel = mongoose.model('Chat', chatSchema);

module.exports = chatModel;
