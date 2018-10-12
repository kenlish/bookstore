const mongoose	=	require('mongoose');

//Book Schema
const bookSchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	genre: {
		type: String,
		require: true
	},
	description: {
		type: String
	},
	author: {
		type: String,
		require: true
	},
	publisher: {
		type: String
	},
	pages: {
		type: String
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

const Book = module.exports = mongoose.model('Book', bookSchema);

//Get Books
module.exports.getBooks = (callback, limit) =>{
	Book.find(callback).limit(limit);
}

//Get a single Book
module.exports.getBookById = (id, callback) =>{
	Book.findById(id, callback);
}

//Add Book
module.exports.addBook  = (book, callback) =>{
	Book.create(book, callback);
}


//Update Book
module.exports.updateBook  = (id, book, options, callback) =>{

	const query = {
		_id: id
	};

	const update = {
		title: book.title,
		genre: book.genre,
		description : book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages
	}

	Book.findOneAndUpdate(query, update, options, callback);
}


//Delete Book
module.exports.removeBook  = (id, callback) =>{
	const query = {
		_id: id
	};

	Book.remove(query, callback);
}