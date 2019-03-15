var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  path = require('path')

var ImageSchema = new Schema({
  title: {type: String},
  descriptoin: {type: String},
  filename: {type: String},
  image_id: {type: String},
  views: {type: String, default: 0},
  likes: {type: String, default: 0},
  // timestamp: {type: String, default: Date.now()}
  timestamp: {type: String}
})
ImageSchema.virtual('uniqueId').get(function() {
  return this.filename.replace(path.extname(this.filename), '')
})
module.exports = mongoose.model('Image', ImageSchema)
// module.exports = mongoose.model('Test', ImageSchema)