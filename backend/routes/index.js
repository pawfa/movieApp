let express = require('express');
let router = express.Router();
let moviesRouter =  require("./moviesRoute");
let commentsRouter =  require("./commentsRoute");

router.all('/movies', moviesRouter);
router.all('/comments', commentsRouter);

module.exports = router;
