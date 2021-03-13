const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

router.get('/', (req, res) => {
    Movie.find().populate('cast').then(movies => {
        console.log(movies);
        res.render('movies/index', { movies });
    })
        .catch(err => {
            next(err);
        });
});

router.get('/new', (req, res) => {
    Celebrity.find().then(celebrities => {
        res.render('movies/new', { celebrities });
    })
        .catch(err => {
            next(err);
        });
});

router.post('/', (req, res) => {
    const { title, genre, plot, cast } = req.body;
    Movie.create({ title, genre, plot, cast }).then(() => {
        res.redirect('/movies')
    })
        .catch(err => {
            next(err);
        });
});

router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id).populate('cast')
        .then(movie => {
            console.log(movie);
            Celebrity.find().then(celebrities => {
                // console.log(movie.cast);
                res.render('movies/edit', { movie, celebrities });
            })
        })
        .catch(err => {
            next(err);
        })
});

router.post('/:id/', (req, res) => {
    const { title, genre, plot, cast } = req.body;
    Movie.findByIdAndUpdate(req.params.id, { title, genre, plot, cast })
        .then(() => {
            res.redirect('/movies');
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;