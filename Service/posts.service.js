const db = require('../bin/db')

class PostsService {
    async createPost(data, images) {
        const {name, description, views, created_date, user_id, category} = data

        return await db.query("INSERT INTO post(name, images, description, views, created_date, user_id, category) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [name, images, description, views, created_date, user_id, category])
    }

    async getAllPost() {
        return await db.query("SELECT * FROM post")
    }

    async getByIdPost(id) {
        return await db.query("SELECT * FROM post WHERE id = $1", [id])
    }

    async getByCategory(id) {
        return await db.query("SELECT * FROM post WHERE category = $1", [id])
    }

    async updatePost(data, id) {
        const {name, description} = data

        return await db.query('UPDATE post SET name = $1, description = $2 WHERE id = $3', [name, description, id])
    }

    async removePost(id) {
        return await db.query('DELETE FROM post WHERE id = $1', [id])
    }
}

module.exports = new PostsService()