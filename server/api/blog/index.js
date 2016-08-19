'use strict';

var express = require('express');
var controller = require('./blog.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/singleEntry', controller.singleEntry);// Try to use get instead? may have problems with sending data though
/*router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);*/

module.exports = router;
