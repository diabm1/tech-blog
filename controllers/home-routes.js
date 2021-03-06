const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// get all posts from homepage
router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true }));

      res.render("all-posts", { posts, isLoggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single post
router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  })
    .then((postData) => {
      if (postData) {
        const post = postData.get({ plain: true });

        res.render("single-post", { post });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
