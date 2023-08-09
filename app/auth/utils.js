const multer  = require('multer')
const upload = multer({ dest: './public/company/' })


module.exports = {
  upload
}