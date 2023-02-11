const {validationResult} = require("express-validator");
const ApiError = require("../Exeption/api-error");
const categoryService = require("../Service/category.service")

class CategoryController {
    async createCategory(req, res, next) {
        const {name} = req.body
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error!', errors.array()))
            }
            const categoryData = await categoryService.createCategory(name)

            return res.json(categoryData.rows)
        } catch (e) {
            next(e)
        }
    }

    async getAllCategory(req, res, next) {
        try {
            const category = await categoryService.getAllCategory()
            return res.json(category.rows)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CategoryController()