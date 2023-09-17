const firebase = require("firebase-admin");

const UserModel = require("./userModel");
const QuestionModel = require("./questionModel");

const serviceAccount = require("../config/credentials.json");
const config = require("../config");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: config.firebase,
});

const firebaseDatabase = firebase.database();

module.exports = {
  users: new UserModel(firebaseDatabase),
  questions: new QuestionModel(firebaseDatabase),
};
