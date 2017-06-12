var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router


// < < < British or Irish? > > >

router.post('/nationality', function (req, res) {
        if (req.body.nationality === 'yes') {
          res.redirect('/threemonths')
        } else {
          res.redirect('/brp')
        }
      });

// < < < Has the claimant been in the country for three months > > >

router.post('/threemonths', function (req, res) {
        if (req.body.threemonths === 'yes') {
          res.redirect('/access')
        } else {
          res.redirect('/fullhrt')
        }
      });

// < < < Does the claimant have access to this ID > > >

router.post('/access', function (req, res) {
        if (req.body.access === 'yes') {
          res.redirect('/providetoday')
        } else {
          res.redirect('/fullhrt')
        }
      });

// < < < Can the claimant provide these today > > >

router.post('/providetoday', function (req, res) {
        if (req.body.providetoday === 'yes') {
          res.redirect('/fasttracknow')
        } else {
          res.redirect('/fasttracklater')
        }
      });

// / < < < BRP > > >

router.post('/brp', function (req, res) {
        if (req.body.brp === 'yes') {
          res.redirect('/refugee')
        } else {
          res.redirect('/fullhrt')
        }
      });

// / < < < Is the claimant a refugee? > > >

router.post('/refugee', function (req, res) {
        if (req.body.refugee === 'yes') {
          res.redirect('/fasttracknow')
        } else {
          res.redirect('/familymember')
        }
      });

// / < < < Family member > > >

router.post('/familymember', function (req, res) {
        if (req.body.familymember === 'yes') {
          res.redirect('/fasttracknow')
        } else {
          res.redirect('/access')
        }
      });




