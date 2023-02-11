const db = require('../bin/db')
const uuid = require('uuid')


class CategoryService {
    async createCategory(name) {
        const category_uid = uuid.v4()

        return await db.query("INSERT INTO category(name, category_uid) VALUES($1, $2) RETURNING *", [name, category_uid])
    }

    async getAllCategory() {
        return await db.query("SELECT * FROM category")
    }
}

module.exports = new CategoryService()