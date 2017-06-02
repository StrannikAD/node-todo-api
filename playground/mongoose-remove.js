const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove.

// Todo.findByIdAndRemove

Todo.findOneAndRemove({-id: '5930b86a5571aacbc54ad992'}).then((todo) => {

});

// Todo.findByIdAndRemove('5930b86a5571aacbc54ad992').then((todo) => {
//   console.log(todo);
// });
