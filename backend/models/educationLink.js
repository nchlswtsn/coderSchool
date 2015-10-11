var mongoose = require('mongoose');

var LinkSchema = new mongoose.Schema({
  title: {type: String, required: true},
  category: {type: String, required: true},
  author: {type: String, required: true},
  url: {type: String, required: true}
  votes: {type: Number, default: 0},
  created: Date.now()
})

LinkSchema.methods.upvote = function(cb){
  this.vote += 1;
  this.save(cb);
}
LinkSchema.methods.downvote = function(cb){
  this.vote -= 1;
  this.save(cb);
}

mongoose.model('Link', LinkSchema);
