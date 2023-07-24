const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testes", { useNewUrlParser: true });

//Create schema
const dogSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		min: 1,
		max: 100
	},
	breed: String
});

const Dog = mongoose.model("Dog", dogSchema);

//Create new document
const dog1 = new Dog({
	name: "Rex1",
	age: 1,
	breed: "Golden Retriver1"
});
const dog2 = new Dog({
	name: "Rex2",
	age: 2,
	breed: "Golden Retriver2"
});
const dog3 = new Dog({
	name: "Rex3",
	age: 3,
	breed: "Golden Retriver3"
});

Dog.deleteOne({name: "Rex"});
//Dog.updateOne({_id: "64bef93aef35496cf852b10a"}, {age: 90});

//Dog.insertMany([dog1, dog2, dog3]);