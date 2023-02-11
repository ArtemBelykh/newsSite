const {validationResult} = require("express-validator");
const ApiError = require("../Exeption/api-error");
const postsService = require("../Service/posts.service")

class PostController {
    async createPost(req, res, next) {
        try {
            const file = req.file.path

            console.log(file)
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error!', errors.array()))
            }

            const postData = await postsService.createPost(req.body, file)
            res.json(postData)
        } catch (e) {
            next(e)
        }
    }

    async getAllPost(req, res, next) {
        try {
            const postData = await postsService.getAllPost()
            res.json(postData.rows)
        } catch (e) {
            next(e)
        }
    }

    async getByIdPost(req, res, next) {
        try {
            const {id} = req.params
            const postData = await postsService.getByIdPost(id)
            res.json(postData.rows)
        } catch (e) {
            next(e)
        }
    }

    async getByCategory(req, res, next) {
        try {
            const {id} = req.params
            const postData = await postsService.getByCategory(id)
            res.json(postData.rows)
        } catch (e) {
            next(e)
        }
    }

    async updatePost(req, res, next) {
        try {
            const errors = validationResult(req)
            const {id} = req.params

            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error!', errors.array()))
            }

            const postData = await postsService.updatePost(req.body, id)
            res.json(postData)
        } catch (e) {
            next(e)
        }
    }

    async removePost(req, res, next) {
        try {
            const {id} = req.params

            const postData = await postsService.removePost(id)

            res.json(postData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new PostController()