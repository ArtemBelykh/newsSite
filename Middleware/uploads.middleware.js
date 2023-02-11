const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // '/files' это директория в которую будут сохранятся файлы
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
// Возьмем оригинальное название файла, и под этим же названием сохраним его на сервере
        const { originalname } = file
        cb(null, originalname)
    }
})

const types = ['image/png', 'image/jpg', 'image/jpeg']

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({ storage, fileFilter})
