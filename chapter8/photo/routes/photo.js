var express = require('express');
var router = express.Router();
var Photo = require('../model/Photo');
var path = require('path');
var fs = require('fs');

router.get('/', function(req, res, next) {
	res.render('photo');
})

router.post('/upload', function(req, res, next) {
	var pic = req.files.pic;
	var name = req.body.name || pic.name;
	var ext = pic.name.substring(pic.name.lastIndexOf('.'));
	var imgName = Date.now()+ext;
	var imgUrl = path.join(__dirname, `../upload/${imgName}`);
	console.log(imgUrl);

	upload(pic.path, imgUrl, function(err) {
		if(err) return next(err);

		Photo.create({
			name: name,
			path: '/upload/' + imgName
		}, (err) => {
			if(err) next(err);
			res.redirect('/');
		})
	});

})

router.get('/:id/download', (req, res, next) => {
	var _id = req.params.id;
	console.log(_id);
	Photo.findById({_id: _id}, (err, photo) => {
		if(err) return next(err);
		res.download(path.join(__dirname, `..${photo.path}`));
	})
})

router.get('/:id/delete', (req, res, next) => {
	var _id = req.params.id;
	console.log(_id);
	Photo.remove({_id: _id}, (err, photo) => {
		if(err) return next(err);
		res.redirect('/');
	})
})

function upload(oldPath, newPath, cb) {
	fs.readFile( oldPath, function (err, data) {
		if(err) {
			console.log(err);
			return
		}
        fs.writeFile(newPath, data, function (err) {
        	if(err) {
				console.log(err);
				return
			}
			console.log( 'File uploaded successfully' );
			cb(err);
       });
   });
}

module.exports = router;