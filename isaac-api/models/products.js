var restful = require('node-restful');
var mongoose = restful.mongoose;

var Images = new mongoose.Schema({ 
    kind: String, 
    url: String
});

var productSchema = new mongoose.Schema({

	title: { type: String, required: true },
    description: { type: String, required: true },
    style: { type: String, unique: true },
    images: [Images],
    modified: { type: Date, default: Date.now }

});

module.exports = restful.model('products', productSchema);