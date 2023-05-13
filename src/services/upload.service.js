const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now().toString()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage, limits: { fieldSize: 10 * 1024 * 1024 } });

module.exports = {
    upload,
}