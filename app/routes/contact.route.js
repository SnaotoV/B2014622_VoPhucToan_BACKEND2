const express = require('express');
const contact = require('../controller/contact.controller');

const router = express.Router();

router.route('/')
    .get(contact.findAll)
    .post(contact.create)
    .delete(contact.deleteAll);
router.route('/favorite')
    .get(contact.findALLFavorite);
router.route('/:id')
    .get(contact.findOne)
    .put(contact.update)
    .delete(contact.delete);

module.exports = router;