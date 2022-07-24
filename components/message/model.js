const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: [
    {
      type: Schema.ObjectId,
      ref: 'User',
    },
  ],
  content: {
    type: String,
    required: true,
  },
  date: Date,
});

const messageModel = mongoose.model('Message', messageSchema);

module.exports = messageModel;
