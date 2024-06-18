const { getAll, create, getOne, remove, update } = require('../controllers/post.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT')

const routerPost = express.Router();

routerPost.route('/')
    .get(getAll)
    .post(verifyJwt,create);

routerPost.route('/:id')
    .get(getOne)
    .delete(verifyJwt,remove)
    .put(verifyJwt,update);

module.exports = routerPost;