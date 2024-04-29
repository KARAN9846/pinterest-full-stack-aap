var express = require('express');
var router = express.Router();
const userModel = require("./users")
const postModel = require("./posts")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express bhai bhai' });
});

router.get('/alluserposts', async function(req, res, next) {
 let user = await userModel.find({_id: "662f992a90ce860a2b81d5d0"})
 res.send(user);
});

router.get('/createuser', async function(req, res, next) {
  let createduser = await userModel.create({
    
      username: "harsh",
      password: "harsh",
      posts: [],
      
      email: "harsh@mail.com",
      fullName: "harsh vandana sharma"
  })

  res.send(createduser)
});

router.get('/createpost', async function (req, res, next) {
  let createdpost = await postModel.create({
    postText: "hello everyone in Gotham City",
    user: "662f992a90ce860a2b81d5d0"
  }) 

  let user = await userModel.findOne({_id: "662f992a90ce860a2b81d5d0"} )
  user.posts.push(createdpost._id);
  await user.save();
  res.send("done")
})

module.exports = router;
