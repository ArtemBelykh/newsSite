const express = require('express');
const userController = require('../Controller/user.controller')
const categoryController = require('../Controller/category.controller')
const postController = require('../Controller/post.controller')
const router = express.Router();

const {body} = require('express-validator')
const authMiddleware = require('../Middleware/auth.middleware')
const uploads = require("../Middleware/uploads.middleware");


/* GET home page. */
router.post('/registration',
    uploads.single("file"),
    userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

// category routes
router.get('/category/getAll', categoryController.getAllCategory)
router.post('/category/add', authMiddleware, categoryController.createCategory)

// post routes
router.post('/posts/add', authMiddleware, uploads.single("images"), postController.createPost)
router.get('/posts/get', postController.getAllPost)
router.get('/posts/get/:id', postController.getByIdPost)
router.get('/posts/getByCategory/:id', postController.getByCategory)
router.put('/posts/update/:id', authMiddleware, postController.updatePost)
router.delete('/posts/delete/:id', authMiddleware, postController.removePost)


module.exports = router;
