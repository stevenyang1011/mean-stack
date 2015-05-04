var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var PostSchema = new Schema({
    title:{
        required: true,
        type: String
    },
    content:{
        required: true,
        type: String
    },
    author:{
        required: true,
        type: Schema.objectId,
        ref: 'User'
    }
})

Mongoose.model('Post', PostSchema);