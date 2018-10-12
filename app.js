const express		=	require('express');
const bodyParser	=	require('body-parser');
const mongoose		=	require('mongoose');
const app			=	express();

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre = require('./models/genres');
Book = require('./models/books');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');

const db	=	mongoose.connection;

app.get('/', (req, res) =>{
	res.send('Please use /api/books or /api/genres');
});

//Get Genres
app.get('/api/genres', (req, res) =>{
	Genre.getGenres( (err, genres) =>{
		if(err){
			throw err;
		}
		res.json(genres)
	});
});

//Get Genre
app.get('/api/genres/:_id', (req, res) =>{
	Genre.getGenreById( req.params._id, (err, genre) =>{
		if(err){
			throw err;
		}
		res.json(genre)
	});
});

//post genre
app.post('/api/genres', (req, res) =>{

	const genre = req.body;

	Genre.addGenre(genre, (err, genre) =>{
		if(err){
			throw err;
		}
		res.json(genre)
	});
});

//update genre
app.put('/api/genres/:_id', (req, res) =>{

	const id = req.params._id;
	const genre = req.body;

	Genre.updateGenre(id, genre, {}, (err, genre) =>{
		if(err){
			throw err;
		}
		res.json(genre)
	});
});

//Delete genre
app.delete('/api/genres/:_id', (req, res) =>{

	const id = req.params._id;

	Genre.removeGenre(id, (err, genre) =>{
		if(err){
			throw err;
		}
		res.json(genre)
	});
});


//Get books
app.get('/api/books', (req, res) =>{
	Book.getBooks( (err, books) =>{
		if(err){
			throw err;
		}
		res.json(books)
	});
});


//Get Book
app.get('/api/books/:_id', (req, res) =>{
	Book.getBookById(req.params._id, (err, book) =>{
		if(err){
			throw err;
		}
		res.json(book)
	});
})

//post a Book
app.post('/api/books', (req, res) =>{

	const book = req.body;

	Book.addBook(book, (err, book) =>{
		if(err){
			throw err;
		}
		res.json(book)
	});
});

//update book
app.put('/api/books/:_id', (req, res) =>{

	const id = req.params._id;
	const book = req.body;

	Book.updateBook(id, book, {}, (err, book) =>{
		if(err){
			throw err;
		}
		res.json(book)
	});
});

//Delete genre
app.delete('/api/books/:_id', (req, res) =>{

	const id = req.params._id;

	Book.removeBook(id, (err, book) =>{
		if(err){
			throw err;
		}
		res.json(book)
	});
});


let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});