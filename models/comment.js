var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var CommentSchema = new Schema({
  // image_id: {type: ObjectId},
  image_id: {type: String},
  email: {type: String},
  name: {type: String},
  gravatar: {type: String},
  comment: {type: String},
  timestamp: {type: String, default: Date.now()}
})
CommentSchema.virtual('image').set(function(image) {
  this._image = image
}).get(function() {
  return this._image
})
module.exports = mongoose.model('Comment', CommentSchema)