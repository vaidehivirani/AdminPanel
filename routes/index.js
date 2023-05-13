var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ msg: 'server working fine' });
});

// router.get('/image/:filename', function (req, res, next) {

//   fs.readFile(`/uploads/${req.params.filename}`,
//     function (err, image) {
//       if (err) {
//         // throw err;
//       }
//       console.log(image);
//       res.setHeader('Content-Type', 'image/jpg');
//       res.setHeader('Content-Length', ''); // Image size here
//       res.header("Access-Control-Allow-Origin", "*");
//       res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
//       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//       res.send(image);
//     }
//   );
// });

module.exports = router;