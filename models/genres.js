const mongoose	=	require('mongoose');

//Genre Schema
const genreSchema = mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get Genres
module.exports.getGenres = (callback, limit) =>{
	Genre.find(callback).limit(limit);
}

//Get a single Genre
module.exports.getGenreById = (id, callback) =>{
	Genre.findById(id, callback);
}

//Add Genre
module.exports.addGenre  = (genre, callback) =>{
	Genre.create(genre, callback);
}

//Update Genre
module.exports.updateGenre  = (id, genre, options, callback) =>{

	const query = {
		_id: id
	};

	const update = {
		name: genre.name
	}

	Genre.findOneAndUpdate(query, update, options, callback);
}


//delete Genre
module.exports.removeGenre  = (id, callback) =>{
	const query = {
		_id: id
	};

	Genre.remove(query, callback);
}
